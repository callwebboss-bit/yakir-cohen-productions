export interface PortfolioItem {
  title: string;
  publishDate: string;
  youtubeUrl: string;
  category: string;
  description: string;
  tags: string[];
  slug: string;
}

const portfolioDirectory = new URL("./portfolio", import.meta.url);

export async function getPortfolioCollection(): Promise<PortfolioItem[]> {
  const fs = await import("fs/promises");
  const files = await fs.readdir(portfolioDirectory);

  const items: PortfolioItem[] = [];
  for (const file of files.filter((file) => file.endsWith(".json"))) {
    const raw = await fs.readFile(new URL(`./portfolio/${file}`, import.meta.url), "utf-8");
    const item = JSON.parse(raw) as PortfolioItem;
    items.push(item);
  }

  return items.sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem | undefined> {
  const items = await getPortfolioCollection();
  return items.find((item) => item.slug === slug);
}
