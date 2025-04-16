---
date: "2025-04-15T13:10:14-07:00"
draft: false
title: "Git for the Layman"
description: A comprehensive guide to using git targetted at the complete beginner.
categories:
- blog
blog-tags:
- guide
params:
    toc: false
    original: "2025-04-15T13:10:14-07:00"
---

## Preamble

Hi! First off, welcome to git! Git is huge, and there are any number of guides out there, but this is mine.
I'm going to start off under the assumption that you understand the value of git, and you're just here to learn how the damn thing works.
I may do another post about this later on, but just trust me, regardless of your vocation, level of experience, or general computer knowledge, you can benefit from using git.
It's an integral tool in working with others in teams, and as an added bonus, once you learn it, you'll never worry about losing work ever again.

If you're using a UI to interface with git, there will be buttons and other input methods to execute the commands that I'll be listing. Rest assured, this information is still incredibly pertinent for you as well, and can be translated with the google search: "do `command` in (CLI here)". With that said, let's get into it.

## What is git?

### Diffs

Git is a tool that keeps track of the changes made to files, and lets you manage these changes. A change in git is called a `diff`.

If you have a text file containing the text "hello world", and you change it to say "goodbye world", git says "ah it looks like 'hello' was deleted and 'goodbye' was added on line 1 of file.txt".
This is a diff.
Git automatically takes this diff and holds onto it.
You can look at these diffs by using `git status`.

### Staging

Git also features a `stage` where you can put these diffs.
Diffs are collected off the stage by default, but you can add them to the stage by using `git add (thing)`.
Once you take a diff and put it on the stage, git stores that diff.
This means that even if you wanted to make more changes to the staged file, It just creates a new diff off the stage with these new changes.
You can combine the two by unstaging the staged diff (`git restore`), or staging the other diff.

### Committing

Once you've finished work on something, you'll want to save a snapshot of your work.
Go ahead and add everything you want to save to the stage, and now you can `commit`. This is done by `git commit`.
Committing yoinks every diff that you've staged, and gathers them together in a little box, and asks you to give it a name. This box is known as a `commit`.

Naming conventions for commits are a hotly contested subject matter, but however you do it, make sure to aptly describe what changes are contained therein.
This is the first thing everyone sees when looking at your changes, and allows you to know what was in that commit later on, when you might need to revert to it, or diagnose a problem.

### Branches

Alright now we have a bunch of these commit boxes in a line, tracking the history of the project in little chunks.
What now?
Well let's say that we want to keep this line of commits as the "source of truth" in our repository. 
That's to say, with few exceptions, this is the version of the code that everyone is sharing.
This means that it needs to be kept in pristine condition. 
Absolutely no bugs, no half implemented features, no failing tests, no shenanigans, etc...
This means, if all else fails, we still have this version of code to fall back on.
We will call this the `main branch`.
"Main" because it's central to everything, and I'll get to the "branch" part of that in a second.

That's all well and good, but now how do you develop on it? 
Development is messy! Not perfect and beautiful like this main branch!
True! This is where `Branches`, plural, come in.

A branch is essentially a copy of the codebase at a certain point in time, that can be used independently of other branches. 
So if I went ahead and created a branch off the main branch, I could do whatever I wanted on it, without having any effect on main.
And the reverse is true as well: If one of my friends comes in and puts code on main, it doesn't affect my branch.

### Checking out

This one is super simple, but it deserved a pointer here. 
When you `checkout` a branch, you move from looking at your other branch to the new one. 
This actually changes the files around to be what they are in the other branch, but it keeps any local changes you've made. 
As a beginner, you'll want to stay on a single non-main branch as much as possible, till you're more comfortable with git. 

### Merging

In standard development environments, you want your working branch to always be up to date with main. 
If there's code on main I want it on my branch! How, You ask?
There are a few ways of doing this, but the simplest, is just a `merge`. 
A merge grabs the state of one branch and plops it onto another. 
In this case, you want to merge main into your branch so if you're currently using your branch you can run `git merge main`. 
This will usually work, but in some cases you may have edited the exact same location in a file as someone else! 
Git has no idea what to do with this so it stops and asks you. 
This is known as the feared `merge conflict`. 
To resolve it, you can check which files conflict with a `git status`, and open any offenders in your text editor of choice. 
You'll notice some weird symbols in this file: 

```
<<<<<<< branch1
# branch1 code here
=======
# branch 2 code here
>>>>>>> branch2
```

If you want to keep both, just delete all three lines with the weird symbols (<, =, and >), save the file and you're good to continue merging! 
If you want just just branch1's code, you can delete the line that says branch1, along with everything between the equals signs and the branch2 line. 
If you want brach2's code, just do the opposite. 
Bottom line, as long as the arrows and equals signs are gone, git doesn't care. 
Just make sure the file is syntactically correct once you're done! 
After that, just go ahead and readd everything to the stage, and run a `git merge --continue`. 
You just killed a merge conflict! Yippee!

If you want to avoid these entirely you can specify a merge strategy in your command taking either yours or theirs in the event of a conflict, but this will override someone's work! 
I'd recommend you try to resolve it manually if you can.

What if I want to put my code on main? Is it the same? You ask. Well yes but actually no. If you're running locally, all alone, sure. 
But if you've got friends, you need something that allows you to share code and work together. You need...

## Github

(Or another git hosting service. I'm not picky, but I'll be referring to this type of service as github, despite there being other options out there in the interest of beginner friendliness. )

Regardless, Git and Github are often misconstrued to be the same thing. 
They are not!
Git is the thing running on your computer tracking files and doing merges. 
Github is where you can send your git repository when you want to back it up on the cloud and/ or share it with others. How does this work? Good question!

### Pushing

Is your commit on your computer, but your friends don't have access to it on github? `push` it! 
Push is the third command in the classic git three-hit-combo:

```
git add
git commit
git push
```

This is the quickest way to get your code from your pc to the remote where other people want it! Notably, push only works on commits! It won't do shit on diffs, even staged ones. Pushing will push your local branch to the linked branch on remote, usually of the same name.

Wow! Can I push to any branch, you definitely didn't ask?
No! Never ever ever ever, ever ever ever push directly to main. 
Unless you know exactly what you're doing, avoid this like the plague. 
Local code has cooties, and we can't have that on our precious main. 
Set up branch protections on github to make sure this never happens. 
Now. I'll wait.

How do you get code on main if you can't push to it?

### Pull requests

A `pull request` is just a merge happening on github, rather than your computer. 
What makes it special is that it allows other people to review your code before it's approved and sent off to main properly. They're generally abbreviated to just "PR".

### Pull/ fetch

These last couple commands are how you get code from github onto your computer. 
`Fetch` is a glance at what's out there without actually doing anything, while `pull` actually grabs changes from github and gets you them locally. 
Generally you want to be pulling code whenever there's updates, especially to main, and if there are, merging main into your current working branch to keep yourself up to date with the project.

## Conclusion

I'm finishing this thing up super late and I'm incredibly cooked, so if there are errors, or any points of confusion please let me know. 

They/them out; ~ Peace! ~
