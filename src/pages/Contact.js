export default Contact = ({ goBack }) => (
 <View style={styles.container}>
   <Text style={styles.title} >Hello From Contact</Text>
   <Button title='Go Back' onPress={goBack} />
 </View>
)
