import React from 'react';
import {
    CardGalleryItem,
    PopoverMenu,
    IconButton,
    Layout,
    Cell,
    AddItem,
    Page,
    Proportion,
    EmptyState,
    Box,
    TextButton,
} from 'wix-style-react';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import More from 'wix-ui-icons-common/More';
import Add from 'wix-ui-icons-common/Add';
import Delete from 'wix-ui-icons-common/Delete';
import { useHistory } from 'react-router-dom';
import { Context, Product } from '../Context/context';

const ProductsPage: React.FC = () => {
    const { products, addProduct, removeProduct } = React.useContext(Context);

    const renderCardGalleryItem = (product: Product) => {
        const { title, subtitle, imageSrc, badge, id } = product;

        return (
            <CardGalleryItem
                title={title}
                subtitle={subtitle}
                badge={badge}
                primaryActionProps={{
                    label: 'Button',
                }}
                secondaryActionProps={{
                    label: 'Text link',
                }}
                backgroundImageUrl={imageSrc}
                settingsMenu={
                    <PopoverMenu
                        triggerElement={({ toggle, close }) => (
                            <IconButton
                                onClick={toggle}
                                onMouseLeave={close}
                                skin="light"
                                size="small"
                                priority="secondary"
                            >
                                <More />
                            </IconButton>
                        )}
                    >
                        <PopoverMenu.MenuItem
                            text="Dublicate"
                            prefixIcon={<Duplicate />}
                            onClick={() => addProduct({...product, id: `${Date.now()}`})}
                        />
                        <PopoverMenu.MenuItem
                            text="Delete"
                            skin="destructive"
                            prefixIcon={<Delete />}
                            onClick={() => removeProduct(id)}
                        />
                    </PopoverMenu>
                }
            />
        );
    };

    const renderProductsGallery = (products: Product[]) => {
        return (
            <>
                {products.map((product, index) => (
                    <Cell key={index} span={4}>
                        {renderCardGalleryItem(product)}
                    </Cell>
                ))}
                <Cell span={4}>
                    <Proportion>
                        <AddItem
                            onClick={() => {
                                useHistory().push('/add-product');
                            }}
                            size="large"
                        >
                            Add Item
                        </AddItem>
                    </Proportion>
                </Cell>
            </>
        );
    };

    return (
        <Page height="100vh">
            <Page.Header title="Products Page" />
            <Page.Content>
                <Layout>
                    {products?.length > 0 ? (
                        renderProductsGallery(products)
                    ) : (
                        <Cell>
                            <EmptyState
                                theme="page"
                                image={
                                    <Box
                                        height={120}
                                        width={120}
                                        borderRadius="50%"
                                        backgroundColor="D50"
                                    />
                                }
                                title="You don't have any items yet"
                                subtitle="Create your product item in an easy & fast way to display it on your site"
                            >
                                <TextButton
                                    onClick={() => {
                                        useHistory().push('/add-product');
                                    }}
                                    prefixIcon={<Add />}
                                >
                                    New Item
                                </TextButton>
                            </EmptyState>
                        </Cell>
                    )}
                </Layout>
            </Page.Content>
        </Page>
    );
};

export default ProductsPage;
