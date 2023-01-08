const Items = ({icon, tooltip='💡 helloWorld'}) => {
    return <div className="sidebar-icon group z-10 hover:cursor-pointer">
       {icon}
       <span className="sidebar-text group-hover:scale-100 z-10">
        {tooltip}
       </span>

    </div>
}

export default Items