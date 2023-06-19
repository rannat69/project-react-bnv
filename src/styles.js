import {   StyleSheet} from 'react-native';  

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    paddingHorizontal: 10,
	borderWidth: 1,
	borderColor: '#D7FD35',
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
	color: '#FF00FF',
	borderWidth: 1,
	borderColor: '#D7FD35',
  },
    buttonGrey: {
    alignItems: 'center',
    backgroundColor: '#222222',
	borderRadius:30,
    padding: 10,
	color: '#FF00FF',
  },
  textWhite: {
    color: '#FFFFFF',
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
theImage: {
        width: "480px",
        height: "600px",
        resizeMode: "center",
    }
  
});

export default styles;