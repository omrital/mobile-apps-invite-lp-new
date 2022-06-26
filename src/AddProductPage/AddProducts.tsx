import type React from 'react';
import { Page, Breadcrumbs } from 'wix-style-react';
import { AddProductCard } from './AddProductCard';
import { useForm } from './AddProductUtils';

const AddProduct: React.FC = () => {
    const {
        name,
        description,
        price,
        imageLink,
        isSaveEnabled,
        setName,
        setDescription,
        setPrice,
        setImageLink,
        onSave,
        onCancel,
    } = useForm();
    return (
        <Page height="100vh">
            <Page.Header
                title="Untitled Product"
                breadcrumbs={
                    <Breadcrumbs
                        items={[
                            { id: 1, value: 'Products', link: '/products-page' },
                            { id: 2, value: 'Untitled Product' },
                        ]
                        }
                    />
                }
            />
            <Page.Content>
                <AddProductCard
                    name={name}
                    description={description}
                    price={price}
                    imageLink={imageLink}
                    onNameChanges={setName}
                    ondescriptionChanges={setDescription}
                    onPriceChanges={setPrice}
                    onImageLinkChanges={setImageLink}
                    onSave={onSave}
                    onCancel={onCancel}
                    isSaveEnabled={isSaveEnabled}
                />
            </Page.Content>
        </Page>
    );
};

export default AddProduct;