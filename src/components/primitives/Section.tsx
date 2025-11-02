export default function Section({ id, className, children }:{
    id?: string; className?: string; children: React.ReactNode;
}) {
    return <section id={id} className={`section py-16 md:py-24 ${className||""}`}>{children}</section>;
}