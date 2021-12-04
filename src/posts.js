import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <ReferenceField source='userId' reference='users'>
                <TextField source='name' />
            </ReferenceField>
            <TextField source='id' />
            <TextField source='title' />
            <EditButton />
            {/* <TextField source='body' /> */}
            
        </Datagrid>
    </List>
);
// 2