# 👏🏽 How to contribute ?

Thank you for your interest in contributing to BobbleMix!

We keep an updated list of bugs/feature requests in [Github Issues][issues].

![GitHub issues](https://img.shields.io/github/issues/cefop/BobbleMixNextJs?style=flat-square)

## Bug Reports

While bugs are unfortunate, they're a reality in software. We can't fix what we don't know about, so please report liberally. If you're not sure if something is a bug or not, feel free to file a bug anyway.

Opening an issue is as easy as following [this link][issues] and filling out the fields. Here are some things you can write about your bug:

- A short summary
- What did you try, step by step?
- What did you expect?
- What did happen instead?
- What is the version of the Cozy Drive?

## Pull Requests

Please keep in mind that:

- Pull-Requests point to the `master` branch
- You need to cover your code and feature by tests
- We recommend to use [task lists][checkbox] to explain steps / features in your Pull-Request description

### Workflow

Pull requests are the primary mechanism we use to change. GitHub itself has some [great documentation][pr] on using the Pull Request feature. We use the _fork and pull_ model described there.

#### Step 1: Fork

Fork the project on GitHub and [check out your copy locally][forking].

```sh
git clone github.com/cefop/BobbleMixNextJs.git
cd BobbleMixNextJs
git remote add fork git://github.com/yourusername/BobbleMixNextJs.git
```

#### Step 2: Branch

Create a branch and start hacking:

```sh
git checkout -b newFeatureName origin/master
```

#### Step 3: Code

Well, we think you know how to do that. Just be sure to follow the coding guidelines from the community ([standard JS][stdjs], comment the code, etc).

#### Step 5: Commit

Writing [good commit messages][commitmsg] is important. A commit message should describe what changed and why.

#### Step 6: Rebase

Use `git rebase` (_not_ `git merge`) to sync your work from time to time.

```sh
git fetch origin
git rebase origin/master my-branch
```

#### Step 7: Push

```sh
git push -u fork my-branch
```

Go to https://github.com/yourusername/BobbleMixNextJs and select your branch. Click the 'Pull Request' button and fill out the form.

Alternatively, you can use [hub] to open the pull request from your terminal:

```sh
 git pull-request -b master -m "My PR message" -o
```

Pull requests are usually reviewed within a few days. If there are comments to address, apply your changes in a separate commit and push that to your branch. Post a comment in the pull request afterwards; GitHub doesn't send out notifications when you add commits.

## Writing documentation

Documentation improvements are very welcome. We try to keep a good documentation in the `/docs` folder. But, you know, we are developers, we can forget to document important stuff that look obvious to us. And documentation can always be improved.

## Community

[issues]: https://github.com/cefop/BobbleMixNextJs/issues/new
[pr]: https://help.github.com/categories/collaborating-with-issues-and-pull-requests/
[forking]: http://blog.campoy.cat/2014/03/github-and-go-forking-pull-requests-and.html
[stdjs]: http://standardjs.com/
[commitmsg]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
[hub]: https://hub.github.com/

{"mode":"full","isActive":false}
