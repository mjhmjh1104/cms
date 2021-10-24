Contest Management System
=========================

Homepage: <http://cms-dev.github.io/>

[![Build Status](https://github.com/cms-dev/cms/workflows/ci/badge.svg)](https://github.com/cms-dev/cms/actions)
[![codecov](https://codecov.io/gh/cms-dev/cms/branch/master/graph/badge.svg)](https://codecov.io/gh/cms-dev/cms)
[![Join the chat at https://gitter.im/cms-dev/cms](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cms-dev/cms?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Introduction
------------

CMS, or Contest Management System, is a distributed system for running
and (to some extent) organizing a programming contest.

CMS has been designed to be general and to handle many different types
of contests, tasks, scorings, etc. Nonetheless, CMS has been
explicitly build to be used in the 2012 International Olympiad in
Informatics, held in September 2012 in Italy.


Download
--------

**For end-users it's best to download the latest stable version of CMS,
which can be found already packaged at <http://cms-dev.github.io/>.**

This git repository, which contains the development version in its
master branch, is intended for developers and everyone interested in
contributing or just curious to see how the code works and wanting to
hack on it.

Please note that since the sandbox is contained in a
[git submodule](http://git-scm.com/docs/git-submodule) you should append
`--recursive` to the standard `git clone` command to obtain it. Or, if
you have already cloned CMS, simply run the following command from
inside the repository:

```bash
git submodule update --init
```


Support
-------

To learn how to install and use CMS, please read the **documentation**,
available at <https://cms.readthedocs.org/>.

If you have questions or need help troubleshooting some problem,
contact us in the **chat** at [gitter](https://gitter.im/cms-dev/cms),
or write on the **support mailing list**
<contestms-support@googlegroups.com>, where no registration is required
(you can see the archives on
[Google Groups](https://groups.google.com/forum/#!forum/contestms-support)).

To help with the troubleshooting, you can upload on some online
pastebin the relevant **log files**, that you can find in
/var/local/log/cms/ (if CMS was running installed) or in ./log (if it
was running from the local copy).

If you encountered a bug, please file an
[issue](https://github.com/cms-dev/cms/issues) on **GitHub** following
the instructions in the issue template.

**Please don't file issues to ask for help**, we are happy to help
on the mailing list or on gitter, and it is more likely somebody will
answer your query sooner.

You can subscribe to <contestms-announce@googlegroups.com> to receive
**announcements** of new releases and other important news. Register on
[Google Groups](https://groups.google.com/forum/#!forum/contestms-announce).

For **development** queries, you can write to
<contestms-discuss@googlegroups.com> and as before subscribe or see the
archives on
[Google Groups](https://groups.google.com/forum/#!forum/contestms-discuss).



Testimonials
------------

CMS has been used in several official and unofficial contests. Please
find an updated list at <http://cms-dev.github.io/testimonials.html>.

If you used CMS for a contest, selection, or a similar event, and want
to publicize this information, we would be more than happy to hear
from you and add it to that list.




From now on, wrote by Jeonghoo Moon
===================================
I've edited cms/server/contest and cmsranking files so that CMS's design can
be changed to fit to WI40ZE from IamCoder 39th. This version of CMS is not
being used as a financial purpose. I've edited its frontend a lot and changed
little of its backend.

Files are at <http://github.com/mjhmjh1104/cms.git/>.

However, this is not the original version of CMS. The oiginal version of CMS
is avaliable at hompage above <http://cms-dev.github.io/>.

This version of CMS is not designed for other personal uses by organizations 
other than IamCoder of GSHS. And, it is not designed to support langues other
than Korean. You may edit this CMS and use wherever you want as long as it
does not violate the rules from original CMS and GNU Affero General Public
License.

Even though you can find out some of the codes in this version of CMS are from
my other projects, I did not use any of the libraries that was not on the
original CMS.

There should be some bugs. If you find a bug, you may let me know and I don't
know whether I will fix it or not. Maybe you can fix it.

There is a bug of CMS encountering error when no problems are avaliable. But I
didn't fix it because there will be no situation of no problems being avaliable
in WI40ZE anyway.