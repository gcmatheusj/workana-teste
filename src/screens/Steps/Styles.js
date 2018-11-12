import { StyleSheet, Dimensions } from 'react-native'

export const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  steps: {
    flex: 1
  },
  child: {
    width,
    alignItems: "center",
    marginTop: 50
  },
  stepText: {
    flex: 1,
    justifyContent: "center" 
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20
  },
  logo: {
    height: 120,
    width: 120
  },
  actionContainer: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  actions: {
    flex: 1
  },
  expandir: {
    borderWidth: 2,
    margin: 10,
    borderRadius: 15,
    height: 42,
    padding: 10,
    fontWeight: "bold",
    marginTop: 40,
    flexDirection: 'row',
    alignItems: "center"
  },
  expandirText: {
    flex: 1, 
    fontWeight: 'bold'
  },
  button: {
    margin: 10,
    marginTop: 3,
    borderRadius: 15,
    backgroundColor: "#E7397E",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  pag: {
    width: 8,
    height: 8
  }
});

export default styles;