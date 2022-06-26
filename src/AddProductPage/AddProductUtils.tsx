import React from 'react';
import { useHistory } from 'react-router-dom';
import { Badge } from 'wix-style-react';
import { Context } from '../Context/context';

type UseForm = {
    name: string;
    description: string;
    price: string | number | undefined;
    imageLink: string;
    setName: (name: string) => void;
    setDescription: (description: string) => void;
    setPrice: (price: number | null) => void;
    setImageLink: (imageLink: string) => void;
    onSave: () => void;
    onCancel: () => void;
    isSaveEnabled: boolean;
}

export function useForm(): UseForm {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState<string | undefined | number>(undefined);
    const [imageLink, setImageLink] = React.useState('');
    const isSaveEnabled = !!(name && imageLink && (price === 0 || price) && imageLink);
    const context = React.useContext(Context)
    const history = useHistory();

    const setPriceByInput = (value: number | null) => setPrice(value === null ? undefined : value);

    function onSave() {
        const product = {
            imageSrc: imageLink,
            title: name,
            subtitle: `${price ? price : 0}`,
            badge: <Badge skin="standard">{description}</Badge>,
            id: `${Date.now()}`
        };
        context.addProduct(product);
        history.push('/products-page')
    }

    function onCancel() {
        history.push('/products-page')
    }

    return {
        name,
        description,
        price,
        imageLink,
        setName,
        setDescription,
        setPrice: setPriceByInput,
        setImageLink,
        onSave,
        onCancel,
        isSaveEnabled,
    };
}