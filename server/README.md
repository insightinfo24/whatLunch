# Nest.js
## 프로젝트 구성(서버)

### nest.js 설치 
  >  npm install -g @nestjs/cli
 
#### nestjs 설치 버전 확인
  > nest --version

#### nestjs 명령어 확인
  > nest

#### ! 만약 위 명령어가 안될 시 위 명령어에서 nest -> npx @nestjs/cli로 수정하고 재시도
  > npx @nestjs/cli

  > npx @nestjs/cli --version

#### 이후 나오는 명령어에도 마찬가지로 nest -> npx @nestjs/cli로 적용가능

---
#### 'nest은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.' 라는 오류 발생시 환경변수 > Path 설정 > npm 추가
(c:/Users/(유저PC명)/AppData/Roaming/npm)

---
### 기본 프로젝트 생성
  > nest new new-project
#### 패키지 매니저 선택
  > cd new-project
#### 서버 실행
  > npm run start:dev
#### 3000번 포트에서 서버 구동 확인가능

---
#### 신규 컨트롤러 생성 (ex : menu)
  > nest generate controller menu

#### 신규 서비스 생성 (ex: menu)
  > nest generate service menu

#### 신규 모듈 생성 (ex: menu)
  > nest g mo menu


---
#### nest.js typeorm을 이용해 DB연결
  > npm install --save @nestjs/typeorm typeorm mysql2

---
### 📝 참고
   https://cdragon.tistory.com/entry/NestJS-4-NestJS-%EC%8B%9C%EC%9E%91-%EC%84%A4%EC%B9%98%EB%B6%80%ED%84%B0-%EA%B8%B0%EB%8A%A5%EA%B5%AC%ED%98%84%EA%B9%8C%EC%A7%80