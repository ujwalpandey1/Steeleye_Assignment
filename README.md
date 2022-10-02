## 1.Explain what the simple `List` component does.
    
The simple List component is responsible for generating and returning the unordered list, <ul> with the help of WrappedListComponent and SingleListItem. It generates the unordered list from the items array that contains objects with one key-value pair i.e., text, which accepts a string as its value.

Talking about the working of the List Component, it calls WrappedListComponent which maps through the items array, and for each index, it calls the SingleListItem component which in turn returns the <li> tag, and then WrappedListComponent constructs the <ul>.

## 2.What problems / warnings are there with code?

a. setSelectedIndex(index) this is a boolean type so remove index which is an in integer.</br>
b. incorrect syntax of setSelectedIndex and It was present in the wrong component List.</br> 
    SingleListeItem component must have this state variable.</br>
c. remove isSelected and update selectIndex.</br>
d. Update handleClick function and update the selectedIndex with a boolean value</br>
e. SingleListItem component must have a key prop while rendering inside List component without </br>
   this it will show a warning on browser console.</br>
f. Incorrect syntax of defining shape of proptype inside List component</br>

## 3. Please fix, optimize, and/or modify the component as much as you think is necessary.
   
The fixed and modified code in this github repo.
