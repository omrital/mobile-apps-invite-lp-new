import { Card, FormField, Input, InputArea, NumberInput, Box, Button } from 'wix-style-react';
import Link from 'wix-ui-icons-common/Link';
import { Layout, Cell } from 'wix-style-react';
import type React from 'react';

export interface IAddProductCardProp {
    name: string;
    description: string;
    price: number | undefined | string;
    imageLink: string;
    onNameChanges(name: string): void;
    ondescriptionChanges(desc: string): void;
    onPriceChanges(price: number | null): void;
    onImageLinkChanges(link: string): void;
    onCancel(): void;
    onSave(): void;
    isSaveEnabled: boolean;
}

export const AddProductCard: React.FC<IAddProductCardProp> = ({
                                                                  name,
                                                                  description,
                                                                  price,
                                                                  imageLink,
                                                                  onNameChanges,
                                                                  ondescriptionChanges,
                                                                  onPriceChanges,
                                                                  onImageLinkChanges,
                                                                  onCancel,
                                                                  onSave,
                                                                  isSaveEnabled,
                                                              }) => {
    return (
        <Card>
            <Card.Header title="Add new item" />
            <Card.Divider />
            <Card.Content>
                <Layout>
                    <Cell span={3}>
                        <FormField label="Name">
                            <Input
                                placeholder="Enter a name"
                                value={name}
                                onChange={({ target }) => onNameChanges(target.value)}
                            />
                        </FormField>
                    </Cell>
                    <Cell span={3}>
                        <FormField label="Price">
                            <Box width="126px">
                                <NumberInput
                                    value={price}
                                    placeholder="Value"
                                    onChange={(e) => onPriceChanges(e)}
                                    prefix={<Input.Affix>$</Input.Affix>}
                                />
                            </Box>
                        </FormField>
                    </Cell>
                    <Cell span={6} />
                    <Cell span={3}>
                        <FormField label="Description">
                            <InputArea
                                value={description}
                                onChange={({ target }) => ondescriptionChanges(target.value)}
                                placeholder="value"
                                minHeight="112px"
                                maxHeight="112px"
                            />
                        </FormField>
                    </Cell>
                    <Cell span={3}>
                        <FormField label="Image">
                            <Input
                                value={imageLink}
                                onChange={({ target }) => onImageLinkChanges(target.value)}
                                placeholder="Image Link"
                                prefix={
                                    <Input.IconAffix>
                                        <Link />
                                    </Input.IconAffix>
                                }
                            />
                        </FormField>
                    </Cell>
                </Layout>
            </Card.Content>
            <Card.Divider />
            <Layout>
                <Cell>
                    <Box padding="SP4" gap="SP2" align="right">
                        <Button onClick={onCancel} priority="secondary">
                            Cancel
                        </Button>
                        <Button disabled={!isSaveEnabled} onClick={onSave}>
                            Save
                        </Button>
                    </Box>
                </Cell>
            </Layout>
        </Card>
    );
};