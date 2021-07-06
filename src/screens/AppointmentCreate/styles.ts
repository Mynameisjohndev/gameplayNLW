import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: theme.colors.secondary90
  },

  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,    
  },

  form: {
    paddingHorizontal: 24,
    marginTop: 32
  },

  select: {
    flexDirection: 'row',
    width: '100%', 
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',    
    paddingRight: 25,
    overflow: 'hidden',    
  },

  selectBody: {
    flex: 1,
    alignItems: 'center',    
  },
  
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary40,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,    
  },

  column: {
    flexDirection: 'row',
    alignItems: 'center'
  },

});