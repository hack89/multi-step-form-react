import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        // PROCESS FORM

        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, bio, email, city, occupation}} = this.props;
        return (
            <MuiThemeProvider>
                <Fragment>
                    <AppBar title='Confirm user details'/>
                    <List>
                        <ListItem 
                            primaryText='First Name'
                            secondaryText={firstName}
                        />
                        <ListItem 
                            primaryText='Last Name'
                            secondaryText={lastName}
                        />
                        <ListItem 
                            primaryText='Email'
                            secondaryText={email}
                        />
                        <ListItem 
                            primaryText='City'
                            secondaryText={city}
                        />
                        <ListItem 
                            primaryText='Occupation'
                            secondaryText={occupation}
                        />
                        <ListItem 
                            primaryText='Bio'
                            secondaryText={bio}
                        />
                        
                    </List>
                    <br/>
                    <RaisedButton 
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label='Submit'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button: {
        margin: 15
    }
}

export default Confirm