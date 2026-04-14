---
date: '2026-04-13T21:10:51-07:00'
draft: true
title: 'Slop'
description: default
categories:
- blog
blog-tags:
- default
params:
    toc: false
    original: '2026-04-13T21:10:51-07:00' 
---

I've been at ends about slop posting on my blog. My main thought pattern is thus: I simply don't want to give it credence by talking about it more, and the less time it spends cluttering my mind, the better. That said, in a manifesto-style schitzo-post on tech usage such as this one, there's really no getting around it. 

I will be referring to these concepts as "LLMs and Generative Models" or more succinctly, just "slop". The term "AI" is unfathomably broad and applies to completely unrelated concepts such as enemy behavior trees in games. It is also the preferred corporate langauage for these objects that also just so happens to evoke profitable misconceptions about the functionality and efficacy therein, so I will not be using it.

Off the bat, I do not use LLMs and Generative Models, I avoid tools that include slop features wherever possible, and I've been working to avoid [software that is built with these tools](https://codeberg.org/small-hack/open-slopware) where I can. Though that last point has become almost entirely unfesable, as I will get into later.

I'll also be starting by temporarily putting the many ethical implications of using such tools aside, and defining what we're working with: what these things are (broadly), some use cases, and some potential inherent problems in the technology, then moving on to those full ethical implications, so please bear with me. This is a field that's still relatively new and incredibly nuanced, so I'll do my best and hope nothing ages too badly! Anyone who happens to study these things is more than welcome to reach out if they find any technical or logical inacuracies in the following.

#### LLMs 

First order of business, LLMs are autocorrect. Autocorrect is not your friend. Autocorrect is not an expert. Autocorrect is not an omniscient god. Though, autocorrect is actually a pretty good thesaurus. I can't necessarily speak to its programming capabilities due to my ethical aversion, (though I'm skeptical of misuse and laziness), but I'll link a recent [blog post](https://enemyhideout.com/2026/04/sins-of-ai-usage/) from a friend who has a bit more depth of experience and can speak to the tech a bit better. And finally, if we're getting philosophical, it's also a pretty good mirror of the internet and broader societal perception as a whole. Let's talk.

My [Ethics Teacher](https://ramielali.com/) has likened a LLM to a lossy snapshot of the internet. I really like this comparison, as it succinctly captures the essence of a LLM. The only reason LLMs can do what they do is the sheer mass of data that they require to operate. They get this data by scraping the internet. I'll get into the more dubious elements therein later, but for our purposes right now, this accumulation of data allows someone to ask a model something, and get the "average" answer. Not necessarily the correct answer, as LLMs have no idea what truth even is, but the average answer, as represented by the accumulation of data. The goal with this data is to reproduce natural-sounding langauage. In this goal, I think everyone can generally agree, LLMs have succeeded. Is this a genuine use case? Perhaps a little bit, as I mentioned above, as a thesaurus. However, as I said earlier, they have no conception of the truth, and thus the validity of any generated statment should be perpetually in question.

"[ChatGPT is Bullshit](https://link.springer.com/article/10.1007/s10676-024-09775-5)" (Hicks, Humphries, Slater) is an ethics paper that describes LLM output not as truths, lies, or hallucination, but rather as "Bullshit." And it does so in a technical sense, rather than a colloquial one. The term "bullshit" in this context sits at odds with the ideas of truth and lies. Both truth and lies acknowledge the presence of a truth, they simply have opposing goals regarding it. Conversely, Bullshit has no regard for truth whatsoever. Doubtlessly, many people are adept bullshitters in this sense, but this characterization of LLM output seems pretty spot on to me. 

The paper goes on to contest the term "hallucination" in the context of falsehoods contained within LLM output, as it suggests a level of perception that exists in the model in the first place that is then being undermined in some way. This perception does not exist in the first place, so this term unduly anthropomorphises models and gives users a false image of their capabilities and salience. Further, they argue the process that results in a generated falsehood and the process that does not are one and the same. These falsehoods are not a hiccup or bug of the model, but are simply artifacts of the LLM, as designed. The term "hallucination" does not characterize them as such, where "bullshit" does. 

The agreggate data elements of LLMs are pretty genuinely fascinating though, especially as a mode of querying societal perceptions and ineqity. A few of the examples that my ethics teacher showed me in class involved asking a LLM to give you a jail sentence in days based on two crimes, and change only the gender or race between the two (a black person was given double the sentence as a white person, all else equal), asking a LLM whether certain groups of people deserved basic human rights, (to which it responded "all people deserve human rights"), then asking whether palestinians deserve human rights, (to which it responded a concerningly long and verbose "it's complicated"). Like it or not, this is what we're working with. This is the aggregate of pretty much the entire internet and every  single piece of information that AI companies could get their hands on. And like it or not, that does say something about the people whose information trained it. All of us.

Of course, this is a mostly un-scientific mode of drawing conclusions, but it does highlight a lot of important ideas and issues with our society as a whole, and if that can shake someone out of the malaise of ignorance or apathy, then I think the technology does have a bit of genuine value! Of course, coming back to planet earth, we're not using LLMs like this. We've actually sprinted away from this kind of LLM behaviour as fast as our little legs can take us. After all, nobody wants to hear about modern day prejudice, and it would be a lot more convenient to duct tape those parts of the model off so the shareholders don't see our model going haywire and calling itself something crazy like "mecha hitler" or something. God forbid they start thinking there might be something wrong with the society and individuals that ended up producing that output. No, no. Better to guardrail it and pretend everything's fine. Much easier than making positive societal change.

Unfortunately in the context of how we use LLMs now (Read: for literally fucking everything why the fuck are we putting LLMs in toothbrushes fuck literally everything I just $50 of RAM to cost $50 *sobbing*), I think realistically the best case scenario is that those guardrails get real good real fast. Heavy benefit of the doubt here, but assuming the whole Grok CSAM thing wasn't intentional, that kind of usage is just going to get more common as models become more and more accessible. These companies in charge must be held to standards and regulation hitherto unseen, or some really fucking bad shit is going to happen. Though, what am I even saying, you probably heard a little laugh track in your head at the word "regulation." Me too, buddy. Me too.

#### Generative Models

I don't think I fully understand the value of generative models. Images, video, music, speech, etc... At the very least it's a modeately interesting technical problem, but its existence only really serves to replace people in creative industry with the hollow shell of pure output. This touches a bit on the idea of commodification of art, and the kantian use of people as mere means. 

##### Art posting

Oh boy here I go art posting again! Broadly, I like to define art as human expression. This definition is quite broad and includes a lot of crazy shit that people might not conventionally think of as "art." I do not care. Perspective is a key aspect of art, so gatekeeping an artist by telling them their art isn't art isn't productive nor helpful. Instead, we should critique the art itself, and if necessary, simply concede that it's not for us, whatever it may be. The value in art, however, is not the residue that it sometimes results in, but rather in the process itself. The lessons learned. The skills obtained. The base human joy of creation and expression. This is what makes art beautiful and what makes us grow as artists and as people.

However,this system of ours prioritizes only what can be sold: that residue. And in doing so, it tells people that the rest does not matter. If there's only one take away you're taking from this section, I want it to be that you should appreciate the beauty of the artistic process just a little bit more.

##### Slop == art?

So, what does this make slop? Well, it's complicated. 

First off, let's look at the model itself. I think the engineering and programming that people did to create such a thing definitely qualifies as such. In this sense, a LLM or generative model itself is art. Now, I'm not making any statments as to the quality, morality, or societal implications of the piece, but I do think it's art. 

Now for the output. I want to take a leaf out of other artistic mediums here to make my argument. Imagine, if you will, an art exhibit that involves the viewer somehow. This could be an interactive museum exhibit or a pretentious art installation in a gallery. For the sake of the argument I'll imaigne a contraption of some sort with a weight, and a paintbrush, and a set of canvases. Viewers are encouraged to gently push the weight in their preferred direction, and observe the contraption paint. There is no argument that the contraption itself is art. However, in its inclusion of the viewer, it creates some further questions: is the interaction between the viewer and the piece art? And is the resulting painting artistic residue? I would argue yes. 

In my mind, this is actually a very simple game. Games feature an interesting dichotomy of art, where both the game itself is art, but so are the players' interactions with it (eg: speedrunning). Let's label this derivative art "secondary art." These secondary arts are (almost always) both an intended and a designed effect by the designer of the primary piece. The designer of our painting machine designed the thing to be interacted with in a certain way: Pushing the weight. However the secondary artist need not interact with it thus. 

Perhaps they take the weight off and attempt to paint a friend's portrait using the mechanics of the contraption. Or figure out a modification for the mechanics that allow the machine to interpret the swinging of the weight completely differently. Or use the machine as a paperweight. This is very similar to [how many D&D players use 5e](/blog/dnd-is-not-for-everyone/)! Most players, however, will simply choose the simplest or most straightforward, optimal option. As game designers, this is what we optimize and design for; Our goal is to make this optimal option also the most fun option. Or the most punishing option. Or the most thematically interesting option. In doing so, we are designing around player behavior. We are shaping this secondary art's possibility space. We are (usually) not designing for when players decompile our game and hack in an infinite cheese spawner. Yet the latter is, without a doubt, a much more creative mode of secondary art than simple, straightforward engagement with the provided systems.

These varying modes of secondary art create a spectrum of creativity within the possibility space, ranging from art that many would refuse to consider art, to [works of genuine wonder](https://www.youtube.com/watch?v=0RPfhmECbX4)\*. All this to say: I would pose that the idle generation of slop by a human is a form of secondary art, low on the secondary creativity spectrum.

However, one quick little problem. Where does this spectrum begin and end? Have you created low-creativity secondary art simply by looking at a piece? Thinking about it? NOT thinking about it? (You just lost [the game](https://en.wikipedia.org/wiki/The_Game_(mind_game)) lol) Moreover, if you draw inspiration from another piece in your creation of primary art, is it now secondary art? 

\*: Disclaimer: *This link is included for \*comedic effect\*. If you do not consider it a work of genuine wonder, feel free to substitute it in your mind for something that is, such as an innovative game mod/ hack or some other form of secondary art. <abbr title="THIS IS ALSO A JOKE">There's nothing I can do about bad taste, unfortunately</abbr>.*

##### Gender isn't real

Just like the socially constructed concept of human gender, I have crafted a false binary structure between primary and secondary art. (Yes, both of those were me; I regret my actions). While there generally "feels" like there should be a distinction, I don't think there is. Art is derivative, after all. Outside a vaccum why should one art be considered "Primary" and another "secondary?" Each of our tools is a piece of art in some respect, and we all take inspiration from the people and works around us. Is a [game mod of theseus](https://en.wikipedia.org/wiki/Ship_of_Theseus), in which a game mod copies the original source code and completely rewrites it, secondary or primary art? I don't think the idea of primary and secondary art is entirely useless as a concept to help frame ideas, but push comes to shove, it simply does not hold itself up to scrutiny.

So now that we no longer have our helpful little dichotomy, what do we do about the whole slop problem? Unfortunately, not much. I'm having trouble decoupling the value of art from its effect on the artist. Yes we have this vague idea of a scale of creativity and some concept of learning and aquiring skills, however the only hard and fast conclusion I can come to here is that this effect is fully individualized. There is no true "objective value" of art, insofar as its impact on the artist, (which is generally unmeasurable), as much as I'd like there to be one. 

That said, I feel strongly that in the use of a tool, especially one as sweeping as a generative model, in the place of learning a craft, the world has lost something of value. Just as craftsmanship declined with the rise of the industrial revolution and the advent of mass-production, replaced with the souless, uncomprehending usage of machines, and the centralization of production within corporations, I am concerned about another such event occurring here. This is, of course, a subjective opinion though. The admiration I have for true mastery and understanding of a craft, is, to some, unproductive. The process of art is of little to no importance to them. Subjectively, they might find more value in generating slop than creating something themselves. Why waste time learning something, they ask, when a tool could do it for you? To which I'd like to respond: "[If you're nothing without the suit then you shouldn't have it.](https://www.youtube.com/watch?v=Jdz0DfLcJTE)" But, while I thouroughly disagree with this worldview, can I in good conscience refute it on objective grounds? Tell them that their opinion of art is simply incorrect? Unfortunately, due to the subjectivity that permeates my definition of art, I don't think so. 

This lands us at a rather stupid, vague, and useless conclusion: Pretty much everything related to human action is art, and no specific piece is inherently more valueable than another. I think one can potentially attempt to tie some form of external value to the art by querying the audience and obtaining a collective opinion and determining the collective impact. However, this process neglets the value of pieces that do not posess or appeal to an audience, as well as lends undue weight to pieces that are used as mere means of wealth and fame, as opposed to ends in themselves. I will not be exploring it. 

##### I just zoned out really bad, what?

Basically, TL;DR, art is subjective and performative, so if someone thinks they did art, then they have. We may criticize this art for whatever we wish on an individual level, but from my perspective, one cannot categorially reject another's actions as "not art," nor can we make objective statments on the superiority of certain modes of art over others. 

This is rather frustrating, as I myself very badly want to claim that typing a handful of words into a corporate web portal isn't art or is at the very least objectively worse than *actual* art. But this is just a crude form of poetry is it not? And many people have exclusionary opinions on stupid performance arts ([relevant dropout clip](https://www.youtube.com/watch?v=Yt5VzZCVYqQ)), [musical compositions](https://en.wikipedia.org/wiki/4%E2%80%B233%E2%80%B3), or even [video games](https://en.wikipedia.org/wiki/Video_games_as_an_art_form)! I think these forms of exclusion are frankly stupid, which is why my definition of art has evolved in the way that it has. You're welcome to disagree with it as a premise, however, I can't in good conscience breach my own definition of art in this way.

Did I need that many words to say that? I don't even know at this point. 

Now, let's get this train back on the rails.

#### Slop and Society

Interesingly, the advent of this kind of technology is showcasing all kinds of problems, not necessarily with itself, but rather with our society and our systems; Under different systems the nature of such a technology might not be as negative as it is under ours, which is partially why I'm capable of coming to such an oddly pro-generated art conclusion in the purely theoretical vaccum I presented above. 

##### School System

As someone in school, the amount of model usage I see is frankly appalling. I can't comment on whether or not models *can* be used educationally, but I know for damn sure that they can be used in lieu of genuine understanding of concepts, and I'd hazard a guess that the majority of usage falls to the latter. 

I'd argue, however, that this is not fully an inherent flaw in models, but rather one in the school system. The gamification of learning through grades was frankly stupid before generative models came around and it'll be stupid long after. And as far as university goes, I'd argue it's more of a corporate tool than it is a learning institution. How many corporations use degree ownership as an applicant sorting mechanism? How many university students are here to satisfy that requirement, or out of some nebulous societal obligation, rather than to actually learn shit?

My distate for the school system is a blog post on its own, but these problems already existed before the dissemination of generative models. The models just made them far more evident and expolitable. 

##### Copyright System

Models are trained upon anything and everything corporations have been able to get their hands on, with no permission or compensation. This has driven immense bot traffic to websites, the ownsers of which have been left to pick up the bill of serving https requests to tens of thousands of bots. This disproportionately affects open source projects and non-profits, many of which are already suffering financially. This also creates the distinct problem of "License washing" where GPL code or otherwise can be consumed then reproduced by a model under a completely different, more permissive license. Many people have found their art or writing styles perfectly reproduced by models upon request without their consent, which is simply disgusting. 

Not all of these problems are a fault of the copyright system, but many are. Copyright is not a tool of the individual, but rather one of corporations or those with the money for legal counsel. If we simply retreat back to the copyright system to protect our work from being used without our consent, we will be retreating back to a system that will inevitably be used to exploit us in the same way, but legally. Remember that legality and morality are different things; laws can and are changed by those in power to benefit themselves, morally or not.

##### Capitalism

The widespread use and marketing of these models is not one of artistic intent, but rather of corporate profit seeking. While they may afford a commodified art experience, their indended goal is to create saleable, marketable artistic residue, while minimizing or replacing as much of the genuine artistic process as possible. On an individual level, this focus on results over craft might mean less engagement in the artistic process, and less control and understanding of the craft involved. On a societal level, this means that corporations who wish to minimize cost of labour in the production of commodities can simply stop paying artists and craftspeople, making an already impossible career somehow even worse.

We as consumers need to stop seeing artists and craftspeople as a [mere means](https://plato.stanford.edu/entries/persons-means/) of obtaining art residue and rather as other human beings with desires, struggles, and joys, just like everyone else, who simply want to make a living making art. Observing the current landscape, the use of generated content in place of human art undermines this idea, as the money and resources that would have gone to them, instead makes its way to corporations in exchange for the tools that have replaced them. Like it or not, even if you consider users of such models as such, fewer artists will be able to survive in this climate, with largely worse-paying, less stable employment, all while corporations use the tech to consolidate power. And this assumes the tools are well built and reliable, which [they are not](https://neuromatch.social/@jonny/116324676116121930). If we build infrastructure upon this stuff we will be sacrificing our own capacity to create as well as setting ourselves up for disaster should these tools enshittify or fail outright.

My vision of an ideal future is one where people can spend more time making meaningful art and less time working to afford life, endlessly striving for infinite productivity, the excesses of which are all gained by executives and shareholders rather than individuals. The current existence of generative models is almost certainly moving us away from, rather than towards, that future, at least under modern systems.

Thus, I believe this mode of technology should be categorically rejected until systematic change brings, at the very least, the capacity for artists and craftspeople to comfortably live off their work in conjunction with the use of such technology. 

#### Open source slop is not real (mostly)

There's a quite good, if a little technical, [blog post](https://tante.cc/2024/10/16/does-open-source-ai-really-exist/) by Smashing Frames that gets into this in much more depth than I have time for in this already quite huge post, but suffice it to say, just throwing a bunch of weights out there without saying how you got them, or from where, is not open. This is equivalent of publishing a binary blob to github and calling it "open source." This is only open source in the sense that "everything's open source if you have unlimited time and can read decompiler output," which, for the layperson, is a hacking joke and not actually indicative of open source status.

#### Slop in open source

Instead, 

#### Avoiding Slop

That's the neat part, you can't.

#### Corpo Slop, homemade slop


