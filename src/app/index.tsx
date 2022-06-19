import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditorProfileView from "./views/EditorProfile.view";
import EditorsListView from "./views/EditorsList.view";
import NotFound404View from "./views/NotFound404.view";
import PostCreateView from "./views/PostCreate.view";
import PostEditView from "./views/PostEdit.view";
import Home from "./views/Home.view";
import { useEffect } from "react";
import info from "../core/utils/info";

export default function App () {
    useEffect(() => {
        window.onunhandledrejection = function (error: PromiseRejectionEvent) {
            info({
                title: error.reason.response?.data.title || 'Erro',
                description: error.reason.response?.data.detail || error.reason.message
            })
            console.log(error)
        }
    }, [])

    return <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/editores'} element={<EditorsListView />} />
      <Route path={'/editores/:id'} element={<EditorProfileView />} />
      <Route path={'/posts/criar'} element={<PostCreateView />} />
      <Route path={'/posts/editar/:id'} element={<PostEditView />} />
      <Route path={'*'} element={<NotFound404View />} />
    </Routes>
  </BrowserRouter>
}