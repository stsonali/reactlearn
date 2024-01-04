# React hooks

-Normal pre built JS functions

userState()-- superpowerful react variables
  -->whenever state variable changes react re-render UI(component) as it triggers reconciliation

# React Use Reconciliation ALgorithm also know as React Fibre **  (came in React 16)

 ** Virtual DOM- representation of actual DOM   (react element)

 ** Diff Algorithm - Find diff b/w old and new virtual DOM on change in state variables and update UI

 # useEffect(()=>{},[]) -  2 argusments   - callback function and dependecy array

 it's callback is call after component is rendered.