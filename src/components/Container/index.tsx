type ContainerProps = {
    children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
    return (
        <div id="container" className="max-w-5xl mx-auto my-0">
            <div id="content" className="m-8">
                    {children}            
            </div>
        </div>
    );
}