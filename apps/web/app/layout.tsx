import Default from 'components/layouts/default';

import '../styles/globals.scss';

export default function Layout({ children }: any): JSX.Element {
    return (
        <html lang="en" >
            <head>
                <title>AnoBlocks</title>
            </head>
            <body>
                <Default>{children}</Default>
            </body>
        </html>
    );
}