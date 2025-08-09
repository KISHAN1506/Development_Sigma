// // In short:

// A branch in Git is a pointer to a series of commits, letting you work on features, bug fixes, or experiments separately from the main code.
// You can create, switch, merge, and delete branches to manage changes without affecting the stable version until ready.

// Example:

// git branch feature
// git switch feature
// # work, commit
// git merge feature

// In a branch code is added in the new banch itself and at the 
// end it is merged with the main branch

// Every developer is working with features in their own branch
// also parallely changes are are added in the main branch

// • shradhakhapra@Shradhas-MacBook-Air project2 & git branch
// * main
// • shradhakhapra@Shradhas-MacBook-Air project2 & git checkout -b feature
// Switched to a new branch 'feature'
// • shradhakhapra@Shradhas-MacBook-Air project2 & git branch
// * feature main
// • shradhakhapra@Shradhas-MacBook-Air project2 & git checkout main
// Switched to branch 'main'
// Your branch is up to date with 'origin/main'.
// • shradhakhapra@Shradhas-MacBook-Air project2 % git branch
// feature
// * main

// Delete branch:
// git branch -d <Branch_Name>