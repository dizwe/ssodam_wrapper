import React, {Component} from 'react';

import TagManager from 'react-gtm-module';

class MainPage extends Component{

    render(){
        TagManager.initialize({
            gtmId: 'GTM-NF3W98T'
          });
        return (
            <div>
                <form action="/action_page.php">
                First name: <input type="text" name="fname"></input>
                Last name: <input type="text" name="lname"></input>
                <input type="submit" value="Submit"></input>
                <a href ="#hi" id="testing">testing</a>
                <a href ="#wooo" id="mbc">mbc</a>
                <a href ="https://www.kbs.co.kr" id="kbs">kbs</a>
                <a id="sbs">sbs</a>
                </form>
            </div>
        );
        
    }
}

export default MainPage