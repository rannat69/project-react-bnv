import logo from './assets/logo.svg';
import navbar from './assets/320px Nav Bar.svg'
import ss1 from './assets/Screen Shot 2021-07-14 at 5.14 1.png'
import rect1 from './assets/Group 1080.svg'
import live from './assets/live.svg'
import image2 from './assets/image2.gif'
import image3 from './assets/image3.gif'
import image4 from './assets/image4.gif'
import rect2 from './assets/Rectangle 296.svg'
import twitter from './assets/twitter.svg'
import discord from './assets/discord.svg'
import insta from './assets/insta.svg'
import linkedin from './assets/linkedin.svg'
import bof from './assets/bof.svg'

import { FlatList,  StyleSheet,
  Button,
  View, ImageBackground,
  SafeAreaView,
  Text, TextInput, TouchableHighlight,
  Alert} from 'react-native';  
import './App.css';

//import TestMongo from './mongodb.js';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'left',
    paddingHorizontal: 10,
	borderWidth: 1,
	borderRadius:10,
	borderColor: '#D7FD35',
	width: '90%',
	    color: '#FFFFFF',
  },
    links: {
    flex: 1,
    justifyContent: 'left',
    paddingHorizontal: 10,
	width: '90%',
  },
  buttonGreen: {
    alignItems: 'center',
    backgroundColor: '#D7FD35',
	borderRadius:30,
    padding: 10,
	borderColor: '#D7FD35',
  },
  buttonBlack: {
    alignItems: 'center',
    backgroundColor: '#111111',
	borderRadius:30,
    padding: 10,
	borderWidth: 1,
	borderColor: '#D7FD35',
  },
    buttonGrey: {
    alignItems: 'center',
    backgroundColor: '#222222',
	borderRadius:30,
    padding: 10,
  },
      buttonGreyTransp: {
    alignItems: 'center',
    backgroundColor: '#222222',
	borderRadius:30,
    padding: 10,
	opacity: 0.7,
  },
  textWhite: {
    color: '#FFFFFF',
  },
    textBlack: {
    color: '#000000',
  },
  textWhiteBold: {
    color: '#FFFFFF',
	fontWeight: 'bold',
	textAlign: 'left',
	fontSize: 30,
  },
  textGreen: {
    color: '#D7FD35',
		fontWeight: 'bold',
	textAlign: 'left',
	fontSize: 30,
  },
  centered: {
  top: 50,
  left: 50,
},
topright: {
  top: 10,
  right: 10,
},

imageWrapper: {
        height: "100%",
        width: "100%",
        overflow : "visible"
},
imageWrapperGrey: {
        height: "100%",
        width: "100%",
        overflow : "visible",
		backgroundColor: '#333333',
			borderRadius:30,
		alignItems: "center",
},
theImage: {
        width: "480px",
        height: "600px",
        resizeMode: "center",
		
    },
bottomView: {
  width: '100%',
  justifyContent: 'left',
  alignItems: 'left',
  position: 'absolute', //Here is the trick
  bottom: 0, //Here is the trick
}
  
});


function MyButton({text, style, styleText, width}) {
		
return (
	<TouchableHighlight style={width}>
	<View style={style}>
	<Text style={styleText}>{text}</Text>
	</View>
	</TouchableHighlight>
	);
}



function App() {



  return (	
	
<View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
		width: "480px",
		backgroundColor: '#000000',
      }}>

<img src={navbar}/>


<View style={styles.imageWrapper}>
     <ImageBackground style={styles.theImage} source={ss1}>
	 
			<MyButton text='Jack Irving' style={styles.buttonGreyTransp} styleText={styles.textWhite} width={{width: "30%"}} />
			
		    <p> <Text style={styles.textWhiteBold}>FROM THE DEEP METAVERSE</Text></p>
			<p> <Text style={styles.textGreen}>THE QUIXOTIC COLLECTION</Text></p>
	  
	  	    <View style={styles.bottomView}>
			<MyButton text='Buy Now' style={styles.buttonGreen} styleText={styles.textBlack} width={{width: "30%"}} />
			 
			<img src={rect1} style={{height: "50%", width: "50%",}}/>
			</View>
			 
     </ImageBackground>
</View>

	<Text style={styles.textWhiteBold}>Our Campaigns and Drops</Text>

<View style={styles.imageWrapper}>
<ImageBackground style={styles.theImage} source={live}>
		  
		  	  	    <MyButton text='Ends in 19 days 12h 2min 3s' style={styles.buttonGreen} styleText={styles.textBlack} width={{width: "60%"}} />
		  
</ImageBackground>
</View>

			<MyButton text='Explore All Collections' style={styles.buttonBlack} styleText={styles.textWhite} width={{width: "50%"}} />
				
				
			<View style={styles.imageWrapper}>
			 <Text style={styles.textWhiteBold}>Wearables in the Metaverse</Text>
			 
		  <img src={image2} style={{borderRadius:30}}/>
		  </View>
		  
 			<MyButton text='DECENTRALAND' style={styles.buttonGrey} styleText={styles.textWhite} width={{width: "50%"}} />
		  
		  <Text style={styles.textWhite}>Discover like-minded people. In Decentraland, many thousands of creators are building interesting things</Text>
	
	<View style={styles.imageWrapper}>
		<img src={rect2}/>
	 </View>
		 
		<MyButton text='SANDBOX' style={styles.buttonGrey} styleText={styles.textWhite} width={{width: "50%"}} />
		  
		<Text style={styles.textWhite}>Discover like-minded people. In Decentraland, many thousands of creators are building interesting things</Text>
		
		<View style={styles.imageWrapper}>
		<img src={image3} style={{borderRadius:30}}/>
		</View>
		
		<Text style={styles.textWhite}>Discover like-minded people. In Decentraland, many thousands of creators are building interesting things</Text>
		  
		  		<MyButton text='DECENTRALAND' style={styles.buttonGrey} styleText={styles.textWhite} width={{width: "50%"}} />

				<View style={styles.imageWrapperGrey}>
		  		<View style={styles.imageWrapper}>
		  		<img src={image4} style={{borderRadius:30}}/>
				</View>
				
				<MyButton text='Try filter' style={styles.buttonGreen} styleText={styles.textBlack} width={{width: "50%"}} />
				</View>
					
				<Text style={styles.textWhiteBold}>Stories on BNV</Text>
				
			<Text style={styles.textWhite}>Learn more about Digital Fashion and the next version of the web by reading BNV stories</Text>

<Text style={styles.textWhiteBold}>Digital Fashion Weeks and Virtual Shows</Text>

		  		<MyButton text='FEATURE' style={styles.buttonGreen} styleText={styles.textBlack} width={{width: "30%"}} />
	  
	  
<Text style={styles.textWhiteBold}>Digital Fashion Weeks and Virtual Shows</Text>
	  
	  		  		<MyButton text='NEWS' style={styles.buttonGreen} styleText={styles.textBlack} width={{width: "30%"}} />

	  

<Text style={styles.textWhiteBold}>Digital Fashion Weeks and Virtual Shows</Text>

	  		  		<MyButton text='EDUCATION' style={styles.buttonGreen} styleText={styles.textBlack} width={{width: "30%"}} /> 
		
			  		  		<MyButton text='Go to Stories' style={styles.buttonBlack} styleText={styles.textWhite} width={{width: "30%"}} />



<Text style={styles.textWhiteBold}>Join the BNV Community</Text>
		
		<View style={styles.container}>
		<table>
		<tr>
		<td align="center">
		<img src={discord}/>
		</td>
		<td align="center">
		<img src={twitter}/>
		</td>
		<td align="center">
		<img src={insta}/>
		</td>
		</tr>
		</table>
		</View>
						
		<Text style={styles.textGreen}>SHARE, ASK, AND COLLABORATE</Text>
		
		<Text style={styles.textWhite}>Our Discord community is the place to answer all your digital fashion, NFTs and metaverse related questions</Text>


		<Text style={styles.textWhiteBold}>We've been featured in</Text>
		<img src={bof}/>
						
		<Text style={styles.textWhite}>Sign up to get our top stories and auctions delivered</Text>
		<TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
		  color: 'white',
        }}
        defaultValue="abc@def.ghi"
      />
	  
<MyButton text='Subscribe' style={styles.buttonGreen} styleText={styles.textBlack} width={{width: "30%"}} />

		<table>
		<tr>
		<td>
		<img src={discord}/>
		</td>
		<td>
		<img src={twitter}/>
		</td>
		<td>
		<img src={insta}/>
		</td>
		<td>
		<img src={linkedin}/>
		</td>
		</tr>
		</table>
			
<View style={styles.links}>	
		<a href="">ABOUT </a>
		<a href="">HELP CENTRE </a>
		<a href="">TERMS AND CONDITIONS </a>
		<a href="">PRIVACY POLICY </a>
		<a href="">SUSTAINABILITY STATEMENT </a>
		</View>
</View>
  );
}

export default App;
