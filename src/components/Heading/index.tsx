type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
    return (
        <h1 className="flex items-center justify-center gap-6 text-4xl font-bold">
            {children}
        </h1>
    )
}