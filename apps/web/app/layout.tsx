import '../styles/globals.scss';

export default function Layout({ children }: any): JSX.Element {
    return (
        <html lang="en" >
            <head>
                <title>AnoBlocks</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
