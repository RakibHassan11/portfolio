export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
    content: string; // Markdown supported
}

export const blogPosts: BlogPost[] = [
    {
        id: "scaling-edtech-websockets-nextjs",
        title: "Scaling Real-Time EdTech Platforms with Next.js and WebSockets",
        excerpt: "How we built Shirshoo's live exam system to handle thousands of concurrent users using Socket.io and Node.js.",
        date: "February 12, 2026",
        category: "System Design",
        readTime: "8 min read",
        image: "/shirsho4.png",
        content: `
## Introduction

Building an EdTech platform is more than just delivering content; it's about creating an engaging, real-time learning environment. When developing **Shirshoo**, one of our biggest challenges was the "Live Exam" feature. We needed a system that could handle thousands of students taking exams simultaneously, with real-time leaderboards and instant feedback.

In this article, I'll dive into how we architected this system using **Next.js**, **Node.js**, **Socket.io**, and **MongoDB**.

## The Challenge: Concurrency and Real-Time State

Traditional REST APIs are great for CRUD operations, but they fall short when you need to push updates to thousands of clients instantly. For a live exam, polling the server every second for leaderboard updates would crash our database.

We needed a bidirectional communication channel. Enter **WebSockets**.

## Architecture Overview

We adopted a microservices-inspired approach for the backend to separate concerns:

1.  **Core API (Express/Node.js)**: Handles authentication, user profiles, and static exam data.
2.  **Exam Engine (Socket.io)**: Dedicated service for handling active exam sessions and real-time state.
3.  **Database (MongoDB)**: Stores questions, answers, and historical results.
4.  **Cache (Redis)**: Used for temporary state management (e.g., current leaderboard scores) to reduce DB load.

## Implementation Details

### 1. Real-Time State with Socket.io

We used Socket.io namespaces to isolate different exam rooms. When a student enters an exam, they join a specific room:

\`\`\`javascript
// Backend: Joining an exam room
io.of("/exams").on("connection", (socket) => {
  socket.on("join_exam", (examId) => {
    socket.join(examId);
    console.log(\`User joined exam: \${examId}\`);
  });
    
  // Handling answers
  socket.on("submit_answer", async (data) => {
    const isCorrect = await validateAnswer(data);
    if (isCorrect) {
       await updateScore(data.userId, data.examId);
       // Broadcast live leaderboard update to the room
       io.of("/exams").to(data.examId).emit("leaderboard_update", await getLeaderboard(data.examId));
    }
  });
});
\`\`\`

### 2. Frontend Optimization with Next.js

On the frontend, we leveraged **Next.js** for server-side rendering (SSR) of the exam introduction pages for SEO, but switched to a highly interactive Client Component for the actual exam interface.

We wrapped our socket logic in a custom hook \`useExamSocket\` to manage connection lifecycles prevents memory leaks:

\`\`\`typescript
const useExamSocket = (examId: string) => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const socket = io("\${process.env.NEXT_PUBLIC_API_URL}/exams");
    
    socket.emit("join_exam", examId);
    
    socket.on("leaderboard_update", (data) => {
      setLeaderboard(data);
    });

    return () => socket.disconnect();
  }, [examId]);

  return { leaderboard };
};
\`\`\`

## Handling Scale

To ensure the system didn't buckle under load:

*   **Ephemeral State in Redis**: Leaderboard scores are calculated in Redis (Sorted Sets) and only written to MongoDB when the exam finishes. This reduced database writes by 95%.
*   **Load Balancing**: We used Nginx to load balance connections across multiple Node.js instances, using Redis as an adapter for Socket.io to share state between instances.

## Conclusion

Building Shirshoo taught us that real-time features require a shift in thinking from "request-response" to "event-driven" architectures. By combining the performance of Next.js with the real-time capabilities of Socket.io and Redis, we created a seamless exam experience that helps students learn better.
        `
    },
    {
        id: "optimizing-3d-web-performance",
        title: "Optimizing 3D Performance on the Web with Three.js",
        excerpt: "Techniques for rendering complex 3D assets smoothly in the browser, based on my work with Anirix 3D Engine.",
        date: "January 28, 2026",
        category: "Frontend Engineering",
        readTime: "6 min read",
        image: "/3d.png",
        content: `
## The Web is entering the 3D Era

With the rise of e-commerce and interactive experiences, 3D on the web is becoming a requirement, not a novelty. However, rendering high-fidelity models in a browser without lag is a significant engineering challenge.

While building the **Anirix 3D Engine**, an interactive web-based 3D workbench, I encountered and solved several performance bottlenecks. Here are the key techniques I used to achieve 60 FPS.

## 1. Efficient Asset Loading (Draco Compression)

Raw GLTF/GLB files can be massive. A 50MB model takes too long to load on mobile networks. We implemented **Draco compression**, which reduced file sizes by up to 80% without noticeable quality loss.

\`\`\`javascript
// Setting up Draco Loader in Three.js
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');
loader.setDRACOLoader(dracoLoader);

loader.load('model_compressed.glb', (gltf) => {
  scene.add(gltf.scene);
});
\`\`\`

## 2. React Three Fiber & Zustand: A State Management Match

Managing the state of a complex 3D scene (camera position, selected meshes, material properties) can get messy. We used **Zustand** specifically because it exists *outside* of the React render cycle.

Why does this matter? Updating a React state triggers a re-render. If you bind a React state to the \`useFrame\` loop (running 60 times a second), you will kill your app's performance.

With Zustand, we can update transient state without triggering React reconciliations:

\`\`\`typescript
// Using Zustand for transient updates
const useStore = create((set) => ({
  targetPosition: [0, 0, 0],
  setTarget: (pos) => set({ targetPosition: pos })
}));

function CameraController() {
  useFrame(() => {
    // Access state directly without causing re-renders
    const target = useStore.getState().targetPosition;
    camera.lookAt(target);
  });
  return null;
}
\`\`\`

## 3. Instanced Rendering

For scenes with many identical objects (like trees in a landscape or screws in a machine), creates a separate draw call for each object is expansive. **InstancedMesh** allows the GPU to render thousands of identical objects in a single draw call.

## Conclusion

3D on the web is powerful, but it requires discipline. By compressing assets, managing the render loop carefully, and leveraging GPU instancing, we made the Anirix engine fast enough for production e-commerce use cases.
        `
    },
    {
        id: "secure-rbac-nextjs-nodejs",
        title: "Implementing Role-Based Access Control (RBAC) in Enterprise Apps",
        excerpt: "Designing a secure and flexible permission system for the Ogangetools HRM platform.",
        date: "December 15, 2025",
        category: "Backend Security",
        readTime: "10 min read",
        image: "/hrm.jpg",
        content: `
## Introduction

Data security is paramount in enterprise applications. When I was building the **HRM System** for Orangetoolz, we needed a robust way to manage what different employees could see and do. A simple "Admin vs. User" flag wasn't enough. We needed fine-grained control: e.g., an HR Manager can *approve* leave, but a Team Lead can only *view* it.

This led to the implementation of a full **Role-Based Access Control (RBAC)** system.

## Designing the Schema

We used **PostgreSQL** with **Prisma ORM**. The key is to decouple "Users" from "Permissions" via "Roles".

\`\`\`prisma
// Prisma Schema
model User {
  id       String @id @default(uuid())
  email    String @unique
  role     Role   @relation(fields: [roleId], references: [id])
  roleId   String
}

model Role {
  id          String       @id @default(uuid())
  name        String       @unique // e.g., "HR_MANAGER", "EMPLOYEE"
  permissions Permission[]
}

model Permission {
  id        String   @id @default(uuid())
  action    String   // e.g., "leave:approve", "employee:create"
  resource  String   // e.g., "leave_request", "employee_record"
  roles     Role[]
}
\`\`\`

## Middleware Authorization

Instead of checking roles in every API route (which is brittle), we created a higher-order function (or middleware in Express) to check **permissions**, not roles.

\`\`\`typescript
// Middleware to check permissions
export const requirePermission = (action: string, resource: string) => {
  return async (req, res, next) => {
    const userRole = req.user.role;
    
    // Check if the user's role has the required permission
    const hasPermission = await db.role.findFirst({
      where: {
        id: userRole.id,
        permissions: {
           some: {
             action: action,
             resource: resource
           }
        }
      }
    });

    if (!hasPermission) {
      return res.status(403).json({ error: "Forbidden" });
    }
    
    next();
  };
};

// Usage
router.post("/leave/approve", requirePermission("approve", "leave_request"), approveLeaveController);
\`\`\`

## Frontend Integration

On the frontend (Next.js), we created a \`<Can>\` component to conditionally render UI elements.

\`\`\`tsx
<Can I="create" a="project">
  <Button>Create New Project</Button>
</Can>
\`\`\`

This ensures that users don't even see buttons they can't click, improving the UX while the backend enforces the hard security constraints.

## Conclusion

RBAC adds complexity initially/ but it pays off in maintainability. By centering our security around "Permissions" rather than static "Roles", we can easily create new roles (like "Intern" or "Auditor") without changing a single line of code.
        `
    }
];
