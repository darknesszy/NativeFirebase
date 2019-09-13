import React, { useState } from 'react'
import auth from '@react-native-firebase/auth'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { NavigationScreenProps } from 'react-navigation'

export default (props: Authentication) => {

    const [form, setForm] = useState({ username: '', password: '' })

    const handleSubmit = async () => {
        if(!form.username || !form.password) return
        console.log('submitting', form)
        const res = await auth().signInWithEmailAndPassword(form.username, form.password)
        console.log('received', res)
        props.navigation.navigate('App')
    }

    return (
        <Container>
            <Grid style={{ margin: 16, paddingTop: '25%' }} >
                <Row>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input 
                                value={form.username}
                                onChangeText={text => setForm(p => ({ ...p, username: text }))} 
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input 
                                value={form.password}
                                onChangeText={text => setForm(p => ({ ...p, password: text }))} 

                                />
                            </Item>
                            <Button
                                style={{ marginTop: 40 }}
                                onPress={() => handleSubmit()}
                                block
                            >
                                <Text>Sign In</Text>
                            </Button>
                        </Form>
                    </Content>
                </Row>
            </Grid>
        </Container>
    )
}

export interface Authentication extends NavigationScreenProps {

}