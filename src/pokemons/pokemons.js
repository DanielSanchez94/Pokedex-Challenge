import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Pagination,
    ShowButton,
    Show, 
    ArrayField,
    SimpleShowLayout,
    ImageField,
} from 'react-admin';

const PokePagination = props => <Pagination rowsPerPageOptions={[5]} {...props} />;

export const PokeList = props => (
    <List {...props} pagination={<PokePagination />} bulkActionButtons={false} actions={false}>
        <Datagrid rowClick="edit">
            <TextField label='ra.navigation.name' source="name"/>
            <ShowButton label='ra.navigation.show'/>
        </Datagrid>
    </List>
);

export const PokeShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField label='ra.show.name' source="name" />
            <TextField label='ra.show.height' source="height" />
            <TextField label='ra.show.weight' source="weight" />
            <TextField label='ra.show.experience' source="base_experience" />
            <ArrayField label='ra.show.ability' source="abilities">
                <Datagrid>
                    <TextField label="" source="ability.name" />
                </Datagrid>
            </ArrayField>
            <ImageField source="sprites.front_default" label='ra.show.photo'/>
            <ImageField source="sprites.front_shiny" label='ra.show.photo'/>
            <ImageField source="sprites.front_female" label='ra.show.photo'/>
            <ImageField source="sprites.front_shiny_female" label='ra.show.photo'/>
            <ImageField source="sprites.back_default" label='ra.show.photo'/>
            <ImageField source="sprites.back_shiny" label='ra.show.photo'/>
            <ImageField source="sprites.back_female" label='ra.show.photo'/>
            <ImageField source="sprites.back_shiny_female" label='ra.show.photo'/>
        </SimpleShowLayout>
    </Show>
);
