import path from "path";

export interface PortfolioItem {
  title: string;
  publishDate: string;
  youtubeUrl: string;
  category: string;
  description: string;
  tags: string[];
  slug: string;
}

const portfolioDirectory = path.join(process.cwd(), "src", "content", "portfolio");

export async function getPortfolioCollection(): Promise<PortfolioItem[]> {
  const fs = await import("fs/promises");
  let files: string[];
  try {
    files = await fs.readdir(portfolioDirectory);
  } catch {
    return [];
  }

  const items: PortfolioItem[] = [];
  for (const file of files.filter((f) => f.endsWith(".json"))) {
    const raw = await fs.readFile(path.join(portfolioDirectory, file), "utf-8");
    const item = JSON.parse(raw) as PortfolioItem;
    items.push(item);
  }

  return items.sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioCollection();
  return items.find((item) => item.slug === slug);
}
