---
layout: default
title: "Schedule"
author: "Community"
dates: true
---

The workshop will take place virtually via Zoom, the week of Jan 4.
We tried to schedule things acceptably for various timezones,
starting at different times on different days.

We will start:
* On January 4th, at <time datetime="2021-01-04T15:00+01:00">3pm CET</time>
* On January 5th, at <time datetime="2021-01-05T12:00+01:00">noon CET</time>
* On January 6th, at <time datetime="2021-01-06T16:00+01:00">4pm CET</time>
* On January 7th, at <time datetime="2021-01-07T14:00+01:00">2pm CET</time>

Sessions will last 4-5 hours including breaks.

Social time will be held on [wonder.me](https://www.wonder.me/).
We will open the room before and after each day's events.
The social time on Monday is "official":
if you're only planning to attend one social event, try to make it this one.

A web calendar can be found [here](./schedule.ics)

## Prerecorded Talks

Some talks were added to our program too late to fit in the live schedule.
We have included these as pre-recorded talks. Video links will be posted here.
The speakers will be available during specified social hours to discuss their presentations:
look for them on [wonder.me](https://www.wonder.me/)!

| Q&A Time | Speaker |
| Tuesday, Jan 5<br><time datetime="2021-01-04T17:15+01:00">5:15pm CET</time> | Mario Carneiro<br>[*MM1: A Lean-style proof assistant for Metamath Zero (tutorial)*](https://www.youtube.com/watch?v=A7WfrW7-ifw) |
| Wednesday, Jan 6<br><time datetime="2021-01-04T21:15+01:00">9:15pm CET</time> | Vaibhav Karve |
| Thursday, Jan 7<br><time datetime="2021-01-04T19:00+01:00">7:00pm CET</time> | Alex Best |

{% assign talks_by_day = site.data.schedule | group_by_exp:"post", "post.date | date: '%A, %B %e'" %}
{% for day in talks_by_day %}
<h2>{{ day.name }}</h2>
<table>
  <tr><th>Time</th><th>Speaker</th></tr>
  {% for talk in day.items %}
  <tr><td><time datetime="{{ talk.date }}">{{ talk.date | date: "%h:%M %p CET" }}</time></td>
      <td>{{talk.presenter}}<br /><em>{{talk.title}}</em></td></tr>
  {% endfor %}
</table>
{% endfor %}
