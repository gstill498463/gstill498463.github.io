if there are conflicts when trying to push to main like: error: failed to push some refs to 'https://github.com/gstill498463/gstill498463.github.io.git' then follow steps A 1 - 4

fetch remote changes
A1) git fetch origin

merge main changes in to local (you'll have to do this if you modify main directly)
A2) git merge origin/main 

resolve conflicts if there are any
A3) git add path/to/conflicted-file

commit merge after resolving conflicts
A4) git commit -m "merge message"


##################
Pushing Changes to remote main branch... B 1 - 5

////////////////////////////////////////////////////////////???first?   git clone ttps://github.com/gstill498463/gstill498463.github.io.git
checks which branch you're pushing to
B1)git branch

B2) git checkout -b main

B3) git add C:\Users\gabri\source\repos\PortfolioDevHost\PortfolioDevHost\wwwroot\js\site.js C:\Users\gabri\source\repos\PortfolioDevHost\PortfolioDevHost\wwwroot\css\styles.css C:\Users\gabri\source\repos\PortfolioDevHost\PortfolioDevHost\Views\Home\Index.cshtml

B4) git commit -m "commit changes message"

B5) git push -u origin main






initializes
) git init
adds origin
) git remote add origin https://github.com/gstill498463/gstill498463.github.io.git


