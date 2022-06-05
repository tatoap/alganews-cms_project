import ErrorBoundary from "../components/ErrorBoundary"
import EditorProfile from "../features/EditorProfile"
import DefaultLayout from "../layouts/Default/Default.layout"

function EditorProfileView () {
    return <DefaultLayout>
        <ErrorBoundary>
            <EditorProfile hidePersonalData={false}/>
        </ErrorBoundary>
    </DefaultLayout>
}

export default EditorProfileView