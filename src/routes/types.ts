import { SemanticICONS } from "semantic-ui-react"

interface IComponent {
    routes: IRoute[];
}

export interface IRoute {
    component: React.FC<IComponent>,
    exact: boolean,
    path: string,
    menu: boolean,
    submenu?: boolean,
    name?: string,
    routes: IRoute[],
    icon?: SemanticICONS
}