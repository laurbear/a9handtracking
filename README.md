# A9: Hand Tracking

## Your name
Lauren Lin

## Your Glitch link
[my page](https://laurbear-a9.glitch.me)


## Describe the experience you designed
I designed 2 experiences. One is called orderFood where you can use gestures
to request bread/vegetables/protein/plate+utensils. The second experience is
called music where you can use your hand to play and pause a music track.

## For each hand gesture it responds to, what does it do?
orderFood - (slash - bread), (high five - plate and utensils), (claw/grab - vegetables),
(fist - protein).

music - (palm/peace sign/fist - PLAY music), (middle finger (lol sorry) - STOP)

## How are you visualizing or changing graphics with the gesture?
For orderFood, I'm visualizing some of the hand points, the request based on the
food label, as well as the food emoji.

For music, I am not visualizing any graphics with the gesture at the moment since
the training is a little janky. 

## What gestures mentioned in the Lingthusiasm podcast are related to your gestures?
Lingthusiasm mentioned the gesture of holding a round object. The hosts talked about using
rounded, grabbing hands, as if there really was a round object in their hands. I then decided
to make the grabbing gesture associated with "vegetables" for the orderFood model because the emoji
is a leafy vegetable or cabbage-like, so I could imagine holding it with my gesture.


## How long did it take to train your network with this Handsfree-handtracking approach?
About 15 minutes. Though the music one needs more refinement and could probably use more training.


## Which gestures did it guess wrong and when? What could have improved that training data?
for orderFood, I was having trouble at first so I used the original training data. 
for music, it gets the palm/fist/peace sign mixed up for reason, but the middle finger is distinct
and recognizable. I think that choosing very different gestures so the points would seem very different
would help the computer distinguish between them.


## How long did it take to train the network with the Teachable Machine pixel-based approach?

It took me about the same amount of time but I think that Teachable Machine could learn/be trained
a little bit faster. I think if I spent more time training for my music model, it couuld be more accurate
and likely take longer than Teachable Machine.


## How did the quality of predictions compare between them?

Because Teachable Machine is pixel-based versus
point based, sometimes the pixels get mixed up if a line is unclear.


## How did the quality of predictions on Teachable Machine change when you changed the background or lighting?

I noticed that better contrast, either though background or lighting, helped the accuracy
and quality of predictions, which makes sense as it's pixel based.

## List any resources (code, images, etc) you've used, and where you got them from

34+35 Instrumental Ariana Grande - Youtube lyrics video
Dr. Kate's A9 starter code

## List any help you got from classmates or websites, so that you can remember it for later

Victoria Tran
Maddie McClellan
CS 396 Discord