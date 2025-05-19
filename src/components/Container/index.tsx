type ContainerProps = {
    children: React.ReactNode;
    justifyType?: string;
}

export function Container({ children, justifyType }: ContainerProps) {
    return (
        <div id="container" className="max-w-5xl mx-auto my-0">
            <div id="content" className={`m-8 flex items-center justify-center sm:${justifyType} md:justify-center` }>
                    {children}            
            </div>
        </div>
    );
}