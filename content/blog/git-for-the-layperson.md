---
date: "2025-10-20"
draft: false
title: "Git for the Layperson"
description: A comprehensive guide to using git targetted at the complete beginner.
categories:
- blog
blog-tags:
- guide
params:
    toc: false
    original: "2025-04-15T13:10:14-07:00"
---

Updated October 20th and November 9th with some new stuff! Also I would be remiss to not include a link to [oh shit git](https://ohshitgit.com/), which you should definitely refer to if you ever run into trouble.

## Preamble

Hi! First off, welcome to git! Git is huge, and there are any number of guides out there, but this is mine.

If you're using a UI to interface with git, there will be buttons and other input methods to execute the commands that I'll be listing. Rest assured, this information is still incredibly pertinent for you as well, and can be translated with the simple internet search: "do git <command> in <UI here>". (eg: github desktop, gitkraken, sourcetree, vscode plugin, etc...). 

## Why do I need to use git in the first place?

A previous version of this guide assumed you already knew the value of git and generally VCS, but seeing as the target demographic is the layperson, I'll assume you are walking into this blind.
If not, feel free to skip this section!
Perhaps you don't know what git is, or assume it's a programmer thing for programmers, or perhaps are generally skeptical of adding additional steps to your workflow, and see git (or VCS) as optional. 
I assure you, it is not. 
Trust me, regardless of your vocation, level of experience, or general computer knowledge, I am confient you can benefit from using git.
It's an integral tool in working with others in teams, and as an added bonus, once you learn it, you'll never worry about losing work ever again. 
Allow me to elaborate.

First, show of hands who's lost work on something before? Proficiency in git makes this occurence a relic of the past. 

Not only that, you also gain the power to time travel back to every single iteration of your project, without losing any work, no ctrl+z required.

Further, you get the ability to simultaneously have multiple "versions" of your project that you can swap between. That way, you can have one version that always works, and others that you use to add features and fixes, merging them together when desired.

If you're using a git server (like github) to upload your git repositories, you also gain an invaluable backup project that allows you to retain your full project state even if your hard drive gets lit on fire (no doubt from your nvidia 12 volt high power connector), you'll still be able to get your project back just fine. 

It also allows you to work on the same project seamlessly from multiple computers! 

Sounds great right? Well those are only the benefits for solo developers. If you're on a team (2 or more people), or working at any moderately sane software job (games or otherwise), git goes from "incredibly useful" to simply "mandatory".

Why?

Well, let's imagine what collaboration requires, without git. 
The project needs to live somewhere, and more often than not, it ends up finding a home on a flash drive or portable drive of some sort that gets handed around based on who needs to work on it.
But if you don't have the flash drive, what happens? If you have a copy on your computer and make changes how do you know that something you're working on hasn't been updated by someone else? Who has to throw away their work or spend hours of their day getting the two versions working together? Whose edits are the "real" version? And worse, if the thing breaks does anyone have a working, up to date version anywhere? And you're still dealing with all of the problems above in the midst of this chaos!

Proficiency in git almost fully trivializes these problems. Where does the project live? Github. How do different people get the most recent version? Pull from github. How do you reconcile changes? Merge branches and resolve conflicts. What's the "real", working version? The main branch. 

The nuances of all of this are of course a bit more complicated, but I hope this generally gave you an impression of the value of git and why you'd want to put the work into learning it. Now, let's get into exactly that.

## What is git?

### Diffs

Git is a tool that keeps track of the changes made to files, and lets you manage these changes. A change in git is called a `diff`.

If you have a text file containing the text "hello world", and you change it to say "goodbye world", git says "ah it looks like 'hello' was deleted and 'goodbye' was added on line 1 of file.txt".
This is a diff.
Git automatically takes this diff and holds onto it.
You can look at these diffs by using `git status`.

### Staging

Git also features a `stage` where you can put these diffs.
Diffs are collected off the stage by default, but you can add them to the stage by using `git add (thing)`. Regularly you'll want to stage all of your changes so usually you'll run `git add --all` or `git add .`
Once you take a diff and put it on the stage, git stores that diff.
This means that even if you wanted to make more changes to the staged file, It just creates a new diff off the stage with these new changes.
You can combine the two by unstaging the staged diff (`git restore --staged`), or staging the other diff.

Be careful running `git restore` on unstaged diffs though, as in certain circumstances you can lose work if you do this flippantly. 

### Committing

Once you've finished work on something, you'll want to save a snapshot of your work.
Go ahead and add everything you want to save to the stage, and now you can `commit`. This is done by `git commit`.
Committing yoinks every diff that you've staged, and gathers them together in a little box, and asks you to give it a name. This box is known as a `commit`.

Naming conventions for commits are a hotly contested subject matter, but however you do it, make sure to aptly describe what changes are contained therein.
This is the first thing everyone sees when looking at your changes, and allows you to know what was in that commit later on, when you might need to revert to it, or diagnose a problem.

### Stashing

Additionally, you can `stash` staged diffs to ignore them right now and save them for later. 
This sounds mostly banal, however becomes very very useful on occasion so it's good to know. 
`git stash` creates a stash containing the currently staged diffs, `git stash pop` kills the stash and restores those diffs, and `git stash drop` deletes the stash without restoring changes.

### Log

Ever need to see a history of your commits real quick? `git log` happens to be the default option, however I've got a little treat for you. 
If you run the following alias command on your terminal you unlock access to `git lg` which is a super trimmed down git log with a pretty looking graph!

git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

I had a mentor at work give me this one, but I found the alias command again after redoing my system config [here](https://coderwall.com/p/euwpig/a-better-git-log). 
Beautiful little alias that'll save you so much annoyance.

The main things to look at in git log, are the commit name, so you know what's in there, and the commit hash, so you know how git referrs to it. 
All you need to know is a hash is a bunch of (not so) random characters that represent a commit in git's brain, like an id of sorts.

Why is it useful to view your repo's commit history and have access to commit hashes though? Stay tuned.

### Reflog

Listen.

Pay attention.

Reflog. Will. Save. Your. Ass.

Reflog is similar to log, however instead of viewing your commit history, it looks at everything. 
See, every time you take a major action in git, reflog saves your state. 
Which means, if you did anything in git, reflog has it. 
Reflog is your homie, reflog wouldn't do you like that. 
Reflog has hashes. So many hashes. 

But what does one do with a list of hashes that represent the history of a repo?

### Reset

`git reset <commit hash here>` is very powerful, but newbies can pretty easily mess it up and cause fixable, yet very distressing problems, so make sure you're pretty confident in what you're doing before doing it.

Notably, **RESET is not RESTORE**. Restore is for staging and unstaging.
Reset allows you to restore your repository to a previous state. 
That state could be a commit, or it could be a hash you found in the reflog.

This means, if you fucked up real bad, you can fix it. 
Just reset the repo!

Reset comes in two main flavors (with some more minor ones you can look for yourself if you're curous): `--soft` and `--hard`.

`git reset <commit hash here> --soft` resets the repo, however keeps all of the changes between your current state and the other one as diffs. 
tldr: it keeps your work.


`git reset <commit hash here> --hard` resets the repo. 
git reset --hard does not care. 
git reset --hard will kill your children (commits). 

If you do end up accidentally calling in a git reset --hard, remember your pal git reflog, and be not afraid. 
Git reflog will help you, git reflog is there for you.

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


### Rebase

I would be remiss for not bringing up the humble `git rebase`. 
Strictly speaking, Rebase is Merge but cooler. 
Merges are rough and ugly, Rebases are clean and beautiful. 
In terms of sheer good practice, always prefer rebases over merges. 
Your coworkers/ team/ fellow open source contributors/ future self will thank you for it.

However, early on, rebases can introduce many many problems if not used in a repository that has general good practice and as such I don't reccommend them to newbies. 
If you're already feeling overwhelmed, skip this section, and come back when you've got some git under your belt. 

For the rest of you, here's a simple summary of a rebase:
Where a merge simply grabs all of your changes and shoves them into another branch, a rebase takes the point where a branch was created and moves it around. 
This essentially rewrites the commit history, so make sure you're not on a branch used by someone else or that makes problems.

This is especially useful for getting your branch updated off main, if main has been updated. 
Generally it's good practice to rebase off main every time you sit down to do some work, to make sure you're working off the most up to date stuff as possible, as well as to update your branch before merging to main. 

Both of these actions are also doable by merges, but merges create really ugly merge commits that end up both:
- causing a shit ton of merge conflicts at the same time (ESPECIALLY if you don't regularly update off main) and
- obfuscating commit history so it becomes super difficult to parse later on. 

A well rebased commit history is literally just a line of commits and their names, each adding an incrememntal change to the project. 
Very simple, and very readable, so when the day comes that you need to regression test a stupid ass bug that won't go away, you can rest easy knowing that you won't need to crack open any commits to see what's actually inside.

Moving on, another beautiful use of the rebase is the...

#### Interactive rebase

`git rebase -i` allows you to interactively rebase your branch step by step.
What the hell does that mean?
Well, it means you can do something like this: `git rebase -i HEAD~3`. 

Let's go through what this does step by step. 
First, What is `HEAD~3`?
HEAD referrs to your current position on the commit history. 
Usually, this is the most recent commit on your branch.
The "~3" means "including 3 commits back". 
This is the total number of commits that will be displayed to you, including the one you're currently on.

Now what are you doing to these 3 commits? 
You're rewriting history, silly! 
You're the time lord! 
Reality bends to your will!
Wanna rename a commit? Done.
Wanna combine two commits into one? Easy.
Delete a commit? No worries.

Once you're done, if you have a remote, you'll have to force push. Again, make sure nobody else uses this branch, and if not, then go ahead and force push your rebase. 
You can make both your and someone else's day really bad if you mess this up and push to remote so be very careful! 
You almost certaintly won't lose work, but you will lose time and sanity, so it pays to think before acting.

### Lingering Questions...

What if I want to put my code on main? Is it the same as a merge? You ask. Well yes but actually no. If you're running locally, all alone, sure (though I'd recommend against it).
But, if you've got friends, you need something that allows you to share code and work together. You need...

## Github

(Or another git hosting service. I'm not picky, but I'll be referring to this type of service as github, despite there being other options out there in the interest of beginner friendliness. If you understand that, check out my essay on [why we need git federation](/blog/FEDERATE-GIT)!)

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

This is the quickest way to get your code from your pc to the remote where other people want it! Notably, push only works on commits! It won't do shit on diffs, even staged ones. Pushing will push your local branch to the linked branch on remote, usually of the same name. Generally, it's impolite to push directly to a branch that someone is using without asking permission. Instead, consider a pull request, or sending them a message.

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
Generally, on larger projects, it's good practice to keep these open for the duration of a feature or fix's development so that other people can track your progress, rather than just opening one up once the code is ready for main. 

### Pull/ fetch

These last couple commands are how you get code from github onto your computer. 
`Fetch` is a glance at what's out there without actually doing anything, while `pull` actually grabs changes from github and gets you them locally. 
Generally you want to be pulling code whenever there's updates, especially to main, and if there are, merging main into your current working branch to keep yourself up to date with the project.

### Best practices (Especially for teams)

Here's a little addendum here, as there are a lot of little things that contribute to a better experience using git, especially with teams, that I didn't fully comment on above.

#### 1. Little changes over big ones.

This applies to both commits and pull requests. 
Split up diffs into discrete commits. 
If you made some big map changes and also fixed a UI element, those two should probably be on seperate commits at least. 
Ideally, you'd open individual branches and pull requests for both, seperately.

That way they can reach main faster, for your teammates to access more quickly.
This also really really helps the readability of your project's history.

#### 2. Feature branches over monolithic branches

I alluded to this earlier, but it's worth repeating: make different branches for different things. 
Individual branches do work for jams and the like, but hardcore break down when working on any long term projects with a team. 

The convention here is to prepend `feature/` to branches adding a feature of some sort, and `patch/` or `fix/` to branches fixing bugs and the like. (eg: `feature/add-shops`)
Feel free to come up with your own conventions for your own projects though! 
Many more professional workplaces will have a task management or ticket system (github projects is a great free option!), with branch names mirroring ticket numbers. (eg: `tickets/DM-38901`)

This also allows teammates to base off your feature branch if they desperately need to build off an in-progress feature, without getting inundated by 83 other changes you happen to have made. 

#### 3. Update off main frequently. 

Always, always, always work off the most recent version of the project. 
Whenever you sit down, checkout main, pull, checkout your branch, and either merge main into your branch, or rebase your branch on top of main.

Seriously, do this. 
People will complain that git has so many merge conflicts;
If your team is constantly updating main, and always updating your local versions to track main, I guarantee merge conflicts will become unfathomably easier and vastly more infrequent.

This also resolves the problem of whose job is it to resolve merge conflicts, as main is the source of truth, so once it's on main, everyone else has to deal with it on their own branches. 
(Which conincidentally really incentivizes smaller branches; if you're keeping up a big branch, whoop de do every time someone makes a change to something you've edited you've gotta update your branch. Split it up buddy!)

#### 4. Git is built for text.

This one is good to know, as git isn't the only VCS (Version Control Software). 

Git handles everything through text, including big binary globs. This makes certain software significantly more annoying to work with, especially proprietary software. 
I'll call out Unreal engine specifically here. Things like actors, map files, etc... gets serialized into an unreadable jumble of characters. 
This makes them totally unmergeable (if conflicts exist anyway), which is bad. 
I personally don't recommend using such software, as merging is incredibly powerful, (and open source software is simply better), however if the choice of software is set in stone, here's the deal.

Git is not great at handling these files, however, other VCS solutions don't really do much more than git in this realm, other than baindaid the problem a bit better.
Essentially, other VCS solutions will allow users to "lock" files so that other people can't edit them, which you can emulate in git by just communicating with your team.
If the files are not locked, and two people do work on one such file, one person will simply have to abandon their work on that specific file, and start over. 
If you do have to work with these, I recommend looking into other VCS software and doing some research. 
Git is still a great option, but the playing ground does get a bit more competitive in this realm.

If files are openly serialized to readable text, such as in godot, this is not a problem and merging can be performed as normal in git.

#### 5. Git is open source!

Just a quick reminder that git is free software developed largely by volunteers! It's licensed under GPLv2, which means that you can use it as a tool to develop whatever you want with no strings attatched, though i'd definitely reccommend reading through the details of the GPL becuase it's fascinating! (that sentence is the nerdiest shit I've written in a while dear god) 

## Conclusion

I'm finishing this thing up super late and I'm incredibly cooked, so if there are errors, or any points of confusion please let me know. 

They/them out; ~ Peace! ~
