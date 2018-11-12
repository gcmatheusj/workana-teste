import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30
  },
  logo: {
    height: 120,
    width: 120
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 60
  },
  login: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 5
  },
  input: {
    borderWidth: 2,
    margin: 10,
    borderRadius: 15,
    height: 42,
    padding: 10,
    fontWeight: "bold"
  },
  button: {
    margin: 10,
    marginTop: 3,
    borderRadius: 15,
    backgroundColor: '#E7397E',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonCadastrar: {
    alignItems: "center",
    marginBottom: 8
  },
  buttonTextCadastrar: {
    fontWeight: 'bold',
    fontSize: 14
  },
  dividerFacebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  divider: {
    backgroundColor: '#E7397E',
    height: 0.8,
    width: '29%'
  },
  textFace: {
    marginHorizontal: 25,
    fontWeight: 'bold',
    fontSize: 14
  },
  facebookIcon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles