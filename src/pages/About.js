export default About = ({ onPress, goBack }) => (
 <View style={styles.container}>
   <Text style={styles.title}>Hello From About</Text>
   <Button onPress={onPress} title='Go To Next Scene' />
   <Button onPress={goBack} title='Go Back' />
 </View>
)
