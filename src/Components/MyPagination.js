import Pagination from '@govuk-react/pagination';


// @author done by Camila, Thushani, Amanah, Thiviya and Saba


// not implemented
function MyPagination() {
    return (
        <>{ /*condition if there are more than 1 record*/}
            <Pagination>
                <Pagination.Anchor
                    href="#prev"
                    previousPage
                >
                    Previous page
                </Pagination.Anchor>
                <Pagination.Anchor
                    href="#next"
                    nextPage
                >
                    Next page
                </Pagination.Anchor>
            </Pagination>
        </>
    );
}
export default MyPagination;
