interface SprayDotsProps {
  color: string;
}

export default function SprayDots({ color }: SprayDotsProps) {
  return <div className="spray-dots" style={{ color }} />;
}
