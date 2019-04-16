# Sample

1...
2...


```
#!/bin/bash

BUILD_NUMBER=%build.number%
GIT_HASH=%build.vcs.number%
GIT_HASH_SHORT=${GIT_HASH:0:7}


echo "##teamcity[buildNumber '$BUILD_NUMBER.${GIT_HASH_SHORT}']"

exit 0
```
