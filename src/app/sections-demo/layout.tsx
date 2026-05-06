/**
 * Sections-demo layout — counteracts root layout's pt-20 so sections
 * start at the top edge. Delete with the demo directory before shipping.
 */
export default function SectionsDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mt-20">
      {children}
    </div>
  );
}
