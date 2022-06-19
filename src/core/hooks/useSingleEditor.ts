import { UserService } from 'tato_ap-sdk';
import { useState, useCallback } from 'react';
import { User } from 'tato_ap-sdk';

export default function useSingleEditor () {
    const [editor, setEditor] = useState<User.EditorDetailed>()

    const fetchEditor = useCallback(async function fetchEditor(editorId: number) {
        UserService.getExistingEditor(editorId)
            .then(setEditor)
    }, [])

    return {
        fetchEditor,
        editor
    }
}