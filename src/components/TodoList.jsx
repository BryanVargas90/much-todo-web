import { useEffect } from 'react'
import {List, list} from 'antd'

export default function TodoList ({loading, itemList, setItemlist, setLoading}) {
useEffect (() => {
    fetch ('https://much-todo-app-bd.web.app/items')
    .then(resp => resp.json())
    .then(setItemlist)
    .catch(alert) // we can do better...
    .finally(() => setLoading(false))
}, [])

return(
    <section>
        <List 
        bordered
        dataSource={itemList}
        loading={loading}
        size= 'large'
        renderItem={(task) => (
            <List.Item className={(task.done) && 'done'}>
                {task.item}
            </List.Item>
        )}

        />

    </section>
)
}