export default function({ onPressQuests, onPressNews}) {

  <View>
      <Card>
          <Card.Media
              height={200}
              image={<Image source={require('./src/images/plant.jpg')} style={{width: widthWindow}}/>}
              overlay
          />
          <Card.Body>
              <Text style={styles.welcomeLabel}>There is Such a Thing as Plant Intelligence</Text>
              <Text>Plants are capable of solving problems and learning from past experiences</Text>
          </Card.Body>
          <Card.Actions position="right">
              <Button value="NORMAL FLAT" text="READ MORE" primary="paperTeal" />
          </Card.Actions>
      </Card>
  </View>
//  {/*<View style={styles.container}>
//    <Text style={styles.title} >TreeDex</Text>
//    <Text style={styles.subtitle}>This is the main page for the application.</Text>
//    <Button onPress={onPressQuests} title='Quests' />
//    <Button onPress={onPressNews} title='News' />
//    <Text style={styles.subtitle}>
//        Choose a category or swipe to your destination.</Text>

//  </View>*/}
}
