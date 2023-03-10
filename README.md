Number to String
================

Using a JavaScript/ECMAScript language/version of your choice, *produce a library* that has the following capability within it:

**given some integer (N) as an argument, return a string representation of that integer.**

For example, using a wrapper script that makes a call to the library the following output would be produced.
```
./int2str.sh 5
String = five

int2str.sh 55
String = fifty-five
```

The wrapper script was used for the example but is not necessary.  The code your are producing should be considered and used as a library.

As a part of the submission, treat the library as though it were an API (which may have new capabilities in the future) that will be used within an organization for production use.  Given that, it should include an appropriate level of professional cleanliness that you would stand behind for a published library.

For the purpose of this problem, the solution should actually solve the problem, rather than purely delegate to another library to do the heavy lifting (such as the Java library ```com.ibm.icu.icu4j```).  While dependencies are permitted, the implementation of the solution should be thoughtful in the dependencies it brings in.

Additional features you think may be useful may be added for discussion purposes as you see fit.

As far as the workflow for submission:

1. Create a branch, using a branch name you feel is appropriate.
2. Once you're satisfied with your solution, create a pull request against _master_
