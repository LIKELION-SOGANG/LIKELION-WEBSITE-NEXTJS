#!/bin/bash

COMMIT_MSG_FILE=$1

# 현재 브랜치 이름 가져오기
branch_name=$(git rev-parse --abbrev-ref HEAD)

# 브랜치 이름에서 마지막 숫자 추출
issue_number=$(echo ${branch_name} | grep -o '[0-9]*$')

# 커밋 메시지 파일의 첫 번째 줄 읽기
first_line=$(head -n1 ${COMMIT_MSG_FILE})

# 브랜치 이름에 숫자가 있는 경우에만 이슈 번호를 커밋 메시지 첫 번째 줄 끝에 추가
if [ -n "$issue_number" ]; then
    sed -i ".bak" "1s/\$/ (#$issue_number)/" ${COMMIT_MSG_FILE}
fi