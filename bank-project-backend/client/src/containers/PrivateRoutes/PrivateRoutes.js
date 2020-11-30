



function PrivateRoutes(params) {
    const role = props.role || "GUEST";

    return (
        <>
        <switch>
            {RolesLists[role].map(({path, page: PageCom}))}

        </switch>


        </>
    )
}

export default PrivateRoutes;