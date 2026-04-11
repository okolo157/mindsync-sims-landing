import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
  connections: number[];
  originalX: number;
  originalY: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });
  const animationFrameRef = useRef<number>(0);
  const isMouseInWindowRef = useRef<boolean>(false);

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = [];
    const particleCount = Math.floor((width * height) / 6000);

    const colors = [
      "rgba(59, 130, 246, 0.9)", // blue-500
      "rgba(147, 197, 253, 0.8)", // blue-300
      "rgba(96, 165, 250, 0.7)", // blue-400
      "rgba(37, 99, 235, 0.6)", // blue-600
      "rgba(29, 78, 216, 0.5)", // blue-700
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.5,
        connections: [],
        originalX: Math.random() * width,
        originalY: Math.random() * height,
      });
    }

    particlesRef.current = particles;
  };

  // Draw particles and connections
  const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Update and draw particles
    particles.forEach((particle) => {
      // Strong mouse interaction - particles follow mouse like anti-gravity
      if (isMouseInWindowRef.current) {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          // Strong attraction/repulsion based on distance
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);

          // Apply force to particle velocity
          particle.vx -= Math.cos(angle) * force * 2;
          particle.vy -= Math.sin(angle) * force * 2;

          // Increase opacity when near mouse
          particle.opacity = Math.min(1, particle.opacity + force * 0.3);
        } else {
          // Gradually return to original opacity
          particle.opacity = Math.max(0.5, particle.opacity - 0.02);

          // Gentle pull back to original position
          const returnForce = 0.02;
          particle.vx += (particle.originalX - particle.x) * returnForce * 0.02;
          particle.vy += (particle.originalY - particle.y) * returnForce * 0.02;
        }
      }

      // Apply velocity with light damping
      particle.vx *= 0.95;
      particle.vy *= 0.95;

      // Move particle
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary checks with bounce
      if (particle.x < particle.radius) {
        particle.x = particle.radius;
        particle.vx *= -0.7;
      } else if (particle.x > width - particle.radius) {
        particle.x = width - particle.radius;
        particle.vx *= -0.7;
      }

      if (particle.y < particle.radius) {
        particle.y = particle.radius;
        particle.vy *= -0.7;
      } else if (particle.y > height - particle.radius) {
        particle.y = height - particle.radius;
        particle.vy *= -0.7;
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Reset connections
      particle.connections = [];
    });

    // Draw connections with stronger visibility
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];

        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const opacity = 1 - distance / 120;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          p1.connections.push(j);
          p2.connections.push(i);
        }
      }
    }
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    draw(ctx, canvas.width, canvas.height);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    isMouseInWindowRef.current = true;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  // Handle mouse entering window
  const handleMouseEnter = () => {
    isMouseInWindowRef.current = true;
  };

  // Handle mouse leaving window
  const handleMouseLeave = () => {
    isMouseInWindowRef.current = false;
  };

  // Handle touch movement
  const handleTouchMove = (e: TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    isMouseInWindowRef.current = true;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.touches[0].clientX - rect.left;
    mouseRef.current.y = e.touches[0].clientY - rect.top;
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles(canvas.width, canvas.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    initParticles(canvas.width, canvas.height);

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;
