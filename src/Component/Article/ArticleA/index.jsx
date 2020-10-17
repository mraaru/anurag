import React, { Component } from 'react'
import Top from "../../../Pages/Component/Layout/Top";
import Menu from '../../../Pages/Component/Layout/Menu';
import Sidebar from '../../../Pages/Component/Layout/Sidebar';
import Footer from '../../../Pages/Component/Layout/Footer';
import ArticleAx from '../../../Pages/Component/Container/Articlex/ArticleA'
export class Page extends Component {
    render() {
        return (
            <>
                <br /><br /><br /><br /><br /><br />
                <ArticleAx />
                <Menu />

                <Footer />
                <Top />
                <Sidebar />

                




                </>
        )
    }
}

export default Page
