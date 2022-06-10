

const Sidebar = () => { 
    return (  
        <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside"> 
            <div className="brand flex-column-auto" id="kt_brand"> 
                <a href="index.html" className="brand-logo">
                    <img alt="Logo" className="w-65px" src="assets/media/logos/sk.png" />
                </a> 
            </div> 
            <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper"> 
                <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500"> 
                    <ul className="menu-nav">
                        <li className="menu-item menu-item-active">
                            <a to='dashboard' className="menu-link">
                                <i className="menu-icon fas fa-home"></i>
                                <span className="menu-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                            <a href="#" className="menu-link menu-toggle">
                                <i className="menu-icon fas fa-coins"></i>
                                <span className="menu-text">Budgeting</span> 
                            </a> 
                        </li>
                        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                            <a href="#" className="menu-link menu-toggle">
                                <i className="menu-icon fas fa-file-invoice-dollar"></i>
                                <span className="menu-text">Treasury</span> 
                            </a> 
                        </li>
                        <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                            <a href="#" className="menu-link menu-toggle">
                                <i className="menu-icon fas fa-file-alt"></i>
                                <span className="menu-text">Reports</span>
                                <i className="menu-arrow"></i>
                            </a>
                            <div className="menu-submenu">
                                <i className="menu-arrow"></i>
                                <ul className="menu-subnav">
                                    <li className="menu-item menu-item-parent" aria-haspopup="true">
                                        <span className="menu-link">
                                            <span className="menu-text">Reports</span>
                                        </span>
                                    </li>
                                    <li className="menu-item" aria-haspopup="true">
                                        <a href="#" className="menu-link">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span></span>
                                            </i>
                                            <span className="menu-text">Cases</span>
                                        </a>
                                    </li>
                                    <li className="menu-item" aria-haspopup="true">
                                        <a href="#" className="menu-link">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span></span>
                                            </i>
                                            <span className="menu-text">Messages</span>
                                        </a>
                                    </li>
                                    <li className="menu-item" aria-haspopup="true">
                                        <a href="#" className="menu-link">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span></span>
                                            </i>
                                            <span className="menu-text">Reports</span>
                                        </a>
                                    </li>
                                    <li className="menu-item" aria-haspopup="true">
                                        <a href="#" className="menu-link">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span></span>
                                            </i>
                                            <span className="menu-text">Calendar</span>
                                        </a>
                                    </li>
                                    <li className="menu-item" aria-haspopup="true">
                                        <a href="#" className="menu-link">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span></span>
                                            </i>
                                            <span className="menu-text">FAQ</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                            <a href="#" className="menu-link">
                                <i className="menu-icon flaticon2-console"></i>
                                <span className="menu-text">Console</span>
                            </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                            <a href="#" className="menu-link">
                                <i className="menu-icon flaticon2-console"></i>
                                <span className="menu-text">System</span>
                            </a>
                        </li>
                        <li className="menu-item" aria-haspopup="true">
                            <a href="#" className="menu-link">
                                <i className="menu-icon flaticon2-graph-1"></i>
                                <span className="menu-text">Logs</span>
                            </a>
                        </li>
                    </ul> 
                </div> 
            </div> 
        </div> 
    )
  }
  
  export default Sidebar